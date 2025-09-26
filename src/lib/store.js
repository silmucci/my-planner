// src/lib/store.js
import { auth, db } from "./firebase";
import {
  doc, setDoc, getDoc, onSnapshot, collection, updateDoc
} from "firebase/firestore";

// ascolta in tempo reale le modifiche del giorno
export function listenDay(dateIso, cb) {
  const uid = auth.currentUser.uid;
  const ref = doc(db, "users", uid, "days", dateIso);
  return onSnapshot(ref, (snap) => {
    const data = snap.data() || {};
    cb({ todos: data.todos || [], events: data.events || [] });
  });
}

// scritture idempotenti
export async function writeDay(dateIso, partial) {
  const uid = auth.currentUser.uid;
  const ref = doc(db, "users", uid, "days", dateIso);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, { todos: [], events: [], ...partial }, { merge: true });
  } else {
    await updateDoc(ref, partial);
  }
}
