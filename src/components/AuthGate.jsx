import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function AuthGate({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
    return unsub;
  }, []);

  if (!ready) return <div style={{ padding: 24 }}>Caricamento…</div>;
  if (!user) return <AuthForm />;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 8 }}>
        <span style={{ opacity: 0.7 }}>👋 {user.email}</span>
        <button className="btn" onClick={() => signOut(auth)}>Logout</button>
      </div>
      {children}
    </div>
  );
}

function AuthForm() {
  const [mode, setMode] = useState("login"); // "login" | "signup" | "reset"
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [info, setInfo] = useState("");

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setInfo("");
    setBusy(true);
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email.trim(), pwd);
      } else if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email.trim(), pwd);
      } else if (mode === "reset") {
        await sendPasswordResetEmail(auth, email.trim());
        setInfo("Email inviata — controlla la posta (anche Spam).");
      }
    } catch (e) {
      const code = e?.code || e?.message || String(e);
      setErr(humanError(code));
      console.error("Auth error:", e);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 360, margin: "60px auto", display: "grid", gap: 10 }}>
      <h3 style={{ textAlign: "center" }}>
        {mode === "login" ? "Accedi" : mode === "signup" ? "Crea account" : "Recupera password"}
      </h3>

      {/* Email sempre visibile */}
      <input
        className="field"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Password visibile solo per login/signup */}
      {mode !== "reset" && (
        <input
          className="field"
          placeholder="Password"
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
        />
      )}

      {/* Messaggi */}
      {err && <div style={{ color: "#b06185", fontSize: 13 }}>Errore: {err}</div>}
      {info && (
        <div style={{ color: "#2b7a4b", fontSize: 13, background: "#eefff6", border: "1px solid #c7ead6", padding: 8, borderRadius: 8 }}>
          {info}
        </div>
      )}

      <button className="btn" type="submit" disabled={busy}>
        {busy ? "Attendi…" : mode === "login" ? "Login" : mode === "signup" ? "Registrati" : "Invia link di recupero"}
      </button>

      {/* Link di cambio modalità */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        {mode !== "login" ? (
          <button type="button" className="link" onClick={() => setMode("login")}>Torna al login</button>
        ) : (
          <button type="button" className="link" onClick={() => setMode("signup")}>Non hai un account? Registrati</button>
        )}

        {mode !== "reset" ? (
          <button type="button" className="link" onClick={() => setMode("reset")}>Password dimenticata?</button>
        ) : (
          <span style={{ fontSize: 12, opacity: 0.8 }}>Inserisci l'email e invia</span>
        )}
      </div>
    </form>
  );
}

function humanError(code) {
  if (code.includes("auth/invalid-email")) return "Email non valida.";
  if (code.includes("auth/user-not-found")) return "Nessun account con questa email.";
  if (code.includes("auth/wrong-password")) return "Password errata.";
  if (code.includes("auth/too-many-requests")) return "Troppe richieste, riprova più tardi.";
  if (code.includes("auth/weak-password")) return "Password troppo debole (min. 6 caratteri).";
  if (code.includes("auth/email-already-in-use")) return "Email già registrata.";
  return code;
}
