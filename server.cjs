// server.js (CommonJS per Windows)
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const webpush = require("web-push");
const cron = require("node-cron");

const app = express();
app.use(cors());               // consente chiamate da localhost:5173
app.use(bodyParser.json());

// ⚠️ genera le chiavi una volta con: npx web-push generate-vapid-keys
const VAPID_PUBLIC  = process.env.VAPID_PUBLIC  || "BMyNUY90shrNqFG7ZnmOCY9py5QQuMDkC7qLLo8rows95_7PJ1E3Ko-QhxgZ54broEVkR6kyPanjaqOaGqVsQv4";
const VAPID_PRIVATE = process.env.VAPID_PRIVATE || "JzgK-octnPBWQtB7ATk_4NypJpZ7gYHdwXFG6Dz7Zmk";
webpush.setVapidDetails("mailto:you@example.com", VAPID_PUBLIC, VAPID_PRIVATE);

// In-memory (demo)
const subscriptions = new Map();  // userId -> subscription
const jobs = [];                  // { when: Date, userId, payload }

// rotte
app.get("/", (req,res)=>res.send("Push server OK"));
app.get("/vapidPublicKey", (req,res)=>res.json({ key: VAPID_PUBLIC }));
app.get("/debug", (req,res)=>res.json({ subs: subscriptions.size, jobs: jobs.length }));

app.post("/subscribe", (req,res)=>{
  const { userId, subscription } = req.body || {};
  if (!userId || !subscription) return res.status(400).json({ ok:false });
  subscriptions.set(userId, subscription);
  res.json({ ok:true });
});

// pianifica una push all'ora richiesta
app.post("/schedule", (req,res)=>{
  const { userId, whenMs, whenISO, title, body, tag, url } = req.body || {};
  const sub = subscriptions.get(userId);
  if (!sub) return res.status(404).json({ ok:false, error:"no subscription" });
  const when = whenMs ? new Date(whenMs) : new Date(whenISO);
  jobs.push({ when, userId, payload: { title, body, tag, url } });
  res.json({ ok:true, when: when.toISOString() });
});

// invia quelle scadute ogni minuto
cron.schedule("* * * * *", async ()=>{
  const now = Date.now();
  const due = jobs.filter(j => j.when.getTime() <= now);
  for (const j of due) {
    const sub = subscriptions.get(j.userId);
    if (!sub) continue;
    try { await webpush.sendNotification(sub, JSON.stringify(j.payload)); }
    catch(e){ console.error("Push error:", e.statusCode || e.message); }
  }
  due.forEach(j => jobs.splice(jobs.indexOf(j), 1));
});

// test immediato
app.post("/notifyNow", async (req,res)=>{
  const payload = JSON.stringify({
    title: req.body?.title || "🔔 Test push",
    body:  req.body?.body  || "Canale push ok",
    url: "/"
  });
  let ok=0, fail=0;
  for (const sub of subscriptions.values()){
    try { await webpush.sendNotification(sub, payload); ok++; }
    catch(e){ fail++; console.error("Push error:", e.statusCode || e.message); }
  }
  res.json({ ok, fail });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log("Push server on http://localhost:"+PORT));
