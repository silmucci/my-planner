// src/lib/notify.ts
import { Capacitor } from "@capacitor/core";
import {
  LocalNotifications,
  type ScheduleOptions,
  type PermissionStatus,
} from "@capacitor/local-notifications";

let asked = false;

/** Chiede il permesso per le notifiche locali */
export async function ensureLocalNotiPermission(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) return false; // valido solo in app native
  if (asked) return true;

  const { display }: PermissionStatus = await LocalNotifications.checkPermissions();
  if (display !== "granted") {
    await LocalNotifications.requestPermissions();
  }
  asked = true;
  return true;
}

/**
 * Programma una notifica locale all'istante specificato (Date).
 * @param when Data/ora della notifica
 * @param title Titolo notifica
 * @param body Contenuto notifica
 */
export async function scheduleLocalReminder(
  when: Date,
  title: string,
  body: string
): Promise<void> {
  if (!Capacitor.isNativePlatform()) return; // evita in web
  await ensureLocalNotiPermission();

  const opts: ScheduleOptions = {
    notifications: [
      {
        id: Math.floor(Math.random() * 1_000_000), // id unico
        title,
        body,
        schedule: { at: when },
        // smallIcon: "ic_stat_name", // opzionale: icona personalizzata
      },
    ],
  };
  await LocalNotifications.schedule(opts);
}
