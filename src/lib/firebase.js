// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { getAnalytics, isSupported as analyticsSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAOqpWe-g6Zm0sppRTTM4O7cpPB25xvptY",
  authDomain: "agenda-ede23.firebaseapp.com",
  projectId: "agenda-ede23",
  storageBucket: "agenda-ede23.appspot.com", // ✅ correzione consigliata
  messagingSenderId: "947628541073",
  appId: "1:947628541073:web:396d8a5c07c5a32f6a6b30",
  measurementId: "G-NWX9FLN4KK",
};

const app = initializeApp(firebaseConfig);

// Analytics solo se supportato
let analytics = null;
analyticsSupported().then((ok) => {
  if (ok) analytics = getAnalytics(app);
});

export const auth = getAuth(app);
export const db = getFirestore(app);

// --- Messaging safe ---
export async function getMessagingSafe() {
  try {
    const ok = await isSupported();
    return ok ? getMessaging(app) : null;
  } catch {
    return null;
  }
}
export async function askNotificationPermissionAndGetToken(vapidKey) {
  const messaging = await getMessagingSafe();
  if (!messaging) return null;
  const perm = await Notification.requestPermission();
  if (perm !== "granted") return null;
  return await getToken(messaging, { vapidKey });
}
export async function listenForegroundMessages(cb) {
  const messaging = await getMessagingSafe();
  if (!messaging) return () => {};
  return onMessage(messaging, (payload) => cb(payload));
}
