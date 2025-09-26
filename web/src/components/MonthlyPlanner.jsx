import React, { useEffect, useMemo, useState } from "react";
import {
  addDays, addMonths, endOfMonth, endOfWeek, format, isSameMonth, isToday,
  startOfMonth, startOfWeek, subMonths, addWeeks, addYears, isAfter
} from "date-fns";
import { it } from "date-fns/locale";

/* ========= UTIL ========= */
const isoLocal = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
const fromIsoLocal = (yyyy_mm_dd) => {
  const [y, m, d] = yyyy_mm_dd.split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0, 0);
};

/* ========= STORAGE ========= */
const STORAGE_KEY = "planner.v4";
function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { byDate: {} };
}
function saveStore(s) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

/* ========= NOTIFICHE LOCALI ========= */
function notifyLocal(title, start, end) {
  if (!("Notification" in window)) return;
  const text = `${title}${start ? " alle " + start : ""}${end ? " fino alle " + end : ""}`;

  if (Notification.permission === "granted") {
    new Notification("📅 Nuovo evento", {
      body: text,
      icon: "/icon-192.png"
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(p => {
      if (p === "granted") {
        new Notification("📅 Nuovo evento", {
          body: text,
          icon: "/icon-192.png"
        });
      }
    });
  }
}

/* ========= PUSH (NON LOCALI) – client helpers ========= */
/** Cambia questo se il tuo server ha un altro host/porta */
const PUSH_BASE = "http://localhost:4000";

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; ++i) output[i] = raw.charCodeAt(i);
  return output;
}

async function getVapidPublicKey() {
  const r = await fetch(`${PUSH_BASE}/vapidPublicKey`);
  const { key } = await r.json();
  return key;
}

async function enablePushOnClient(userId = "demo-user") {
  try {
    // 0) Requisiti di base
    if (!("serviceWorker" in navigator)) { alert("Service Worker non supportato da questo browser."); return false; }
    if (!("PushManager" in window)) { alert("Push API non supportata da questo browser."); return false; }
    if (location.protocol !== "https:" && location.hostname !== "localhost") {
      alert("Le push richiedono HTTPS (oppure localhost in sviluppo).");
      return false;
    }

    // 1) Stato attuale permessi
    console.log("[Push] Notification.permission =", Notification.permission);

    // 2) Chiedi permesso notifiche se serve
    let perm = Notification.permission;
    if (perm === "default") {
      try {
        // alcuni browser supportano sia promise che callback
        perm = await new Promise((resolve) => {
          const res = Notification.requestPermission((p) => resolve(p));
          if (res && typeof res.then === "function") res.then(resolve);
        });
      } catch (e) {
        console.warn("requestPermission error", e);
      }
    }
    if (perm === "denied") {
      alert("Hai negato le notifiche per questo sito.\nApri le impostazioni del sito nel browser e consenti le notifiche, poi riprova.");
      return false;
    }
    if (perm !== "granted") {
      alert("Permesso per le notifiche non concesso.");
      return false;
    }

    // 3) Registra il Service Worker (se non è già registrato)
    const reg = await navigator.serviceWorker.register("/sw.js").catch((e) => {
      console.error("SW register error", e);
      throw e;
    });
    const ready = await navigator.serviceWorker.ready;
    console.log("Service Worker pronto:", !!ready);

    // 4) Recupera chiave VAPID dal server
    let pub;
    try {
      pub = await getVapidPublicKey(); // deve restituire la chiave pubblica base64-url
    } catch (e) {
      alert("Non riesco a contattare il server delle notifiche(/vapidPublicKey). Avvialo e riprova.");
      return false;
    }
    const appServerKey = urlBase64ToUint8Array(pub);

    // 5) Verifica se c'è già una subscription
    let sub = await ready.pushManager.getSubscription();
    if (!sub) {
      // crea subscription (qui il browser potrebbe mostrare un micro prompt se serve)
      sub = await ready.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: appServerKey
      });
    }
    console.log("Subscription creata:", sub);

    // 6) Invia la subscription al server per salvarla
    const resp = await fetch(`${PUSH_BASE}/subscribe`, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({ userId, subscription: sub })
    });
    if (!resp.ok) {
      alert("Il server non ha accettato la subscription (/subscribe).");
      return false;
    }

    alert("Notifiche attivate!");
    return true;
  } catch (err) {
    console.error("enablePushOnClient error:", err);
    alert("Errore nell’attivazione delle notifiche!");
    return false;
  }
}

/** Chiedi al server di pianificare una push all'orario di inizio dell'evento */
async function scheduleServerPush({ userId = "demo-user", dateKey, startHHMM, endHHMM, title }) {
  try {
    if (!startHHMM) return; // se non c'è orario, non scheduliamo push
    const [hh, mm] = startHHMM.split(":").map(Number);
    const when = new Date(fromIsoLocal(dateKey));
    when.setHours(hh || 0, mm || 0, 0, 0);

    const body = endHHMM ? `${startHHMM}–${endHHMM}` : startHHMM;

    await fetch(`${PUSH_BASE}/schedule`, {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({
        userId,
        whenISO: when.toISOString(),
        title: title || "Evento",
        body,
        tag: `planner-${dateKey}-${startHHMM}`,
        url: "/" // pagina da aprire al click della notifica
      })
    });
  } catch (e) {
    // silenzioso: se il server non c'è, il planner continua a funzionare
    console.warn("scheduleServerPush fallita (server non raggiungibile?)");
  }
}

/* ========= COMPONENTE ========= */
export default function MonthlyPlanner() {
  const [tab, setTab] = useState("month");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  const [bgMode, setBgMode] = useState(localStorage.getItem("bgMode") || "none");
  const [bgPattern, setBgPattern] = useState(localStorage.getItem("bgPattern") || "bows");
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("bgMode", bgMode);
    localStorage.setItem("bgPattern", bgPattern);
  }, [theme, bgMode, bgPattern]);

  const [cursor, setCursor] = useState(() => new Date(new Date().setHours(12,0,0,0)));
  const monthLabel = format(cursor, "MMMM yyyy", { locale: it });

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(cursor), { weekStartsOn: 1 });
    const end   = endOfWeek(endOfMonth(cursor),   { weekStartsOn: 1 });
    const list = [];
    for (let d = start; d <= end; d = addDays(d, 1)) {
      list.push(new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12));
    }
    return list;
  }, [cursor]);

  const [store, setStore] = useState(loadStore());
  useEffect(() => saveStore(store), [store]);
  const todosOf = (key) => store.byDate[key] || [];
  const setTodos = (key, arr) =>
    setStore(prev => ({ byDate: { ...prev.byDate, [key]: arr }}));

  function addOne(key, title, startTime, endTime) {
    const t = (title || "").trim();
    if (!t) return;
    const arr = [...todosOf(key), { id: crypto.randomUUID(), title: t, time: startTime || "", end: endTime || "", done: false }];
    arr.sort((a,b) => {
      if (!a.time && !b.time) return 0;
      if (!a.time) return 1;
      if (!b.time) return -1;
      return a.time.localeCompare(b.time);
    });
    setTodos(key, arr);
  }
  function toggleTodo(key, id) {
    setTodos(key, todosOf(key).map(x => x.id === id ? { ...x, done: !x.done } : x));
  }
  function deleteTodo(key, id) {
    setTodos(key, todosOf(key).filter(x => x.id !== id));
  }

  function addTodoWithRepeat(baseKey, title, startTime, endTime, repeatKind) {
    // aggiungi il primo
    addOne(baseKey, title, startTime, endTime);

    // notifica locale immediata
    notifyLocal(title, startTime, endTime);

    // prova a programmare la push remota (se server attivo)
    scheduleServerPush({ dateKey: baseKey, startHHMM: startTime, endHHMM: endTime, title }).catch(()=>{});

    // ripetizione come già avevi
    if (repeatKind === "none") return;
    const hardStop  = addYears(fromIsoLocal(baseKey), 1);
    let d = fromIsoLocal(baseKey);
    while (true) {
      if (repeatKind === "daily")   d = addDays(d, 1);
      else if (repeatKind === "weekly")  d = addWeeks(d, 1);
      else if (repeatKind === "monthly") d = addMonths(d, 1);
      else if (repeatKind === "yearly")  d = addYears(d, 1);
      else break;

      if (isAfter(d, hardStop)) break;
      addOne(isoLocal(d), title, startTime, endTime);

      // per semplicità: non schedulo automaticamente anche le repliche lato server
      // (posso aggiungerlo se vuoi: chiamando scheduleServerPush per ogni replica)
    }
  }

  const [openDayKey, setOpenDayKey] = useState(null);
  useEffect(() => { if (openDayKey) document.querySelector(".drawer")?.focus(); }, [openDayKey]);

  const [dayDate, setDayDate]   = useState(isoLocal(new Date(new Date().setHours(12,0,0,0))));
  const [startHHMM, setStart]   = useState("08:00");
  const [endHHMM, setEnd]       = useState("");
  const [repeat, setRepeat]     = useState("none");
  const [title, setTitle]       = useState("");

  function handleDailySubmit(e){
    e?.preventDefault();
    if (!title.trim()) return;
    addTodoWithRepeat(dayDate, title, startHHMM, endHHMM, repeat);
    setTitle("");
  }

  // registra il Service Worker una volta (non cambia nulla al resto)
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(()=>{});
    }
  }, []);

  const weekNames = ["Lun","Mar","Mer","Gio","Ven","Sab","Dom"];

  return (
    <div className={`page ${bgMode==="pattern" ? "page--pattern" : ""}`} data-bg={bgPattern}>
      <div className={`planner ${tab==="day" ? "planner--daily-pattern" : ""}`} {...(tab==="day"?{"data-bg":bgPattern}:{})}>
        {/* TOP */}
        <div className="topbar">
          <div className="tabs" style={{ marginRight: 8 }}>
            <button type="button" className={`tab ${tab==="month"?"active":""}`} onClick={()=>setTab("month")}>Mensile</button>
            <button type="button" className={`tab ${tab==="day"?"active":""}`}   onClick={()=>setTab("day")}>Giornaliero</button>
          </div>
          <h1 className="title">My Planner</h1>
          <div className="right-tools">
            {/* Bottone per attivare le push non locali */}
            <button type="button" className="btn" onClick={async ()=>{
              const ok = await enablePushOnClient("demo-user");
              alert(ok ? "Push attivate!" : "Push non attivate.");
            }}>📤 Attiva Push</button>

            <select className="select" value={theme} onChange={(e)=>setTheme(e.target.value)}>
              <option value="">Rosa</option><option value="blue">Blu</option><option value="green">Verde</option>
              <option value="red">Rosso</option><option value="yellow">Giallo</option><option value="purple">Viola</option>
              <option value="orange">Arancio</option><option value="gray">Grigio</option><option value="black">Nero</option>
            </select>
            <select className="select" value={bgMode} onChange={(e)=>setBgMode(e.target.value)}>
              <option value="none">Sfondo: tema</option>
              <option value="pattern">Sfondo: pattern</option>
            </select>
            {bgMode==="pattern" && (
              <select className="select" value={bgPattern} onChange={(e)=>setBgPattern(e.target.value)}>
                <option value="bows">🎀 Fiocchetti</option>
                <option value="basket">🏀 Basket</option>
                <option value="leaves">🍃 Foglie</option>
                <option value="love">💗 Cuori</option>
                <option value="star">⭐ Stelle</option>
                <option value="alien">👽 Alieno</option>
                <option value="balloon">🎈 Palloncini</option>
                <option value="asroma">🟡🔴 ASROMA</option>
                <option value="ciliege">🍒 Ciliegie</option>
                <option value="pois">🟡 Pois</option>
                <option value="moon">🌕 Luna</option>
              </select>
            )}
            <div className="monthbox">{monthLabel}</div>
          </div>
        </div>

        {/* ====== CONTENUTO ====== */}
        {tab === "day" ? (
          <>
            <form className="daily-form" onSubmit={handleDailySubmit}>
              <div className="daily-row">
                <input className="ctrl ctrl--date"   type="date" value={dayDate}   onChange={(e)=>setDayDate(e.target.value)} />
                <input className="ctrl ctrl--start"  type="time" step="300" value={startHHMM} onChange={(e)=>setStart(e.target.value)} />
                <input className="ctrl ctrl--end"    type="time" step="300" value={endHHMM}   onChange={(e)=>setEnd(e.target.value)} title="Fine (opzionale)" />
                <select className="ctrl ctrl--repeat" value={repeat} onChange={(e)=>setRepeat(e.target.value)}>
                  <option value="none">Nessuna rip.</option>
                  <option value="daily">Ogni giorno</option>
                  <option value="weekly">Ogni settimana</option>
                  <option value="monthly">Ogni mese</option>
                  <option value="yearly">Ogni anno</option>
                </select>
                <input className="ctrl ctrl--title" placeholder="Nome evento…" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <button type="submit" className="btn-lg btn--add">Aggiungi</button>
              </div>
            </form>

            <ul className="daily-list">
              {todosOf(dayDate).length===0 && <li className="empty">Nessun evento.</li>}
              {todosOf(dayDate).map(t=>{
                const when = t.time ? (t.end ? `${t.time}–${t.end}` : t.time) : "";
                return (
                  <li key={t.id}>
                    <label style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <input type="checkbox" checked={t.done} onChange={()=>toggleTodo(dayDate, t.id)} />
                      <span className={t.done ? "strike":""}>{when ? `${when} — `:""}{t.title}</span>
                    </label>
                    <button type="button" className="link" onClick={()=>deleteTodo(dayDate, t.id)}>Elimina</button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <div className="month-grid">
              {weekNames.map(w=><div key={w} className="cell head">{w}</div>)}
              {days.map((d,i)=>{
                const key=isoLocal(d), out=!isSameMonth(d,cursor), today=isToday(d), todos=todosOf(key);
                return (
                  <div key={i} className={`cell day ${out?"out":""} ${today?"today":""}`} onClick={()=>setOpenDayKey(key)}>
                    <div className="day__num">{format(d,"d",{locale:it})}</div>
                    <ul className="mini">
                      {todos.slice(0,3).map(t=>{
                        const when = t.time ? (t.end ? `${t.time}–${t.end}` : t.time) : "";
                        return (
                          <li key={t.id} className={t.done?"done":""}>
                            • {when ? `${when} ` : ""}{t.title}
                          </li>
                        );
                      })}
                      {todos.length>3 && <li className="more">+{todos.length-3} altro…</li>}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="nav">
              <button type="button" className="btn" onClick={()=>setCursor(subMonths(cursor,1))}>‹ Mese prec.</button>
              <button type="button" className="btn" onClick={()=>setCursor(addMonths(cursor,1))}>Mese succ. ›</button>
            </div>
            {openDayKey && (
              <div className="backdrop" onClick={()=>setOpenDayKey(null)}>
                <div className="drawer" role="dialog" aria-modal="true" tabIndex={-1} onClick={(e)=>e.stopPropagation()}>
                  <div className="drawer__title">
                    {format(fromIsoLocal(openDayKey), "EEEE d MMMM yyyy", { locale: it })}
                  </div>
                  <ul className="daily-list">
                    {todosOf(openDayKey).length===0 && <li className="empty">Nessun evento.</li>}
                    {todosOf(openDayKey).map(t=>{
                      const when = t.time ? (t.end ? `${t.time}–${t.end}` : t.time) : "";
                      return (
                        <li key={t.id}>
                          <label style={{ display:"flex", alignItems:"center", gap:8 }}>
                            <input type="checkbox" checked={t.done} onChange={()=>toggleTodo(openDayKey, t.id)} />
                            <span className={t.done ? "strike":""}>{when ? `${when} — `:""}{t.title}</span>
                          </label>
                          <button type="button" className="link" onClick={()=>deleteTodo(openDayKey, t.id)}>Elimina</button>
                        </li>
                      );
                    })}
                  </ul>
                  <div style={{ marginTop:"auto", display:"flex", justifyContent:"flex-end" }}>
                    <button type="button" className="btn" onClick={()=>setOpenDayKey(null)}>Chiudi</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
