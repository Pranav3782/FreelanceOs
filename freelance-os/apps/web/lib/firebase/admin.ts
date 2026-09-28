/**
 * @file apps/web/lib/firebase/admin.ts
 * @description Secure Server-Side Firebase Admin SDK Initialization
 *
 * Uses official modern modular Firebase Admin SDK imports:
 * - firebase-admin/app
 * - firebase-admin/auth
 * - firebase-admin/firestore
 *
 * Uses safe lazy Proxy initialization to prevent top-level module evaluation failures
 * and GCP metadata service timeouts when deployed on serverless runtimes without service account keys.
 */

import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";

export const projectId =
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "studio-3617949397-6cc07";

export function hasAdminCredentials(): boolean {
  return Boolean(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY ||
    (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS
  );
}

function initializeFirebaseAdmin(): App | null {
  if (!hasAdminCredentials()) {
    return null;
  }

  const existingApps = getApps();
  if (existingApps.length > 0) {
    return existingApps[0]!;
  }

  // 1. Check for complete service account JSON in environment variable
  const rawServiceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (rawServiceAccount) {
    try {
      let parsedKey: any;
      if (rawServiceAccount.trim().startsWith("{")) {
        parsedKey = JSON.parse(rawServiceAccount);
      } else {
        const decoded = Buffer.from(rawServiceAccount, "base64").toString("utf8");
        parsedKey = JSON.parse(decoded);
      }
      if (parsedKey.private_key && typeof parsedKey.private_key === "string") {
        parsedKey.private_key = parsedKey.private_key.replace(/\\n/g, "\n");
      }
      return initializeApp({
        credential: cert(parsedKey),
        projectId: parsedKey.project_id || projectId,
      });
    } catch (parseErr) {
      console.error("[Firebase Admin] Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:", parseErr);
    }
  }

  // 2. Check for discrete private key and client email
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  if (privateKey && clientEmail) {
    return initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      projectId,
    });
  }

  return null;
}

let _adminApp: App | null = null;
let _adminAuth: Auth | null = null;
let _adminDb: Firestore | null = null;

export function getAdminApp(): App | null {
  if (!_adminApp) {
    _adminApp = initializeFirebaseAdmin();
  }
  return _adminApp;
}

export function getAdminAuth(): Auth | null {
  if (!_adminAuth) {
    const app = getAdminApp();
    if (app) {
      try {
        _adminAuth = getAuth(app);
      } catch (err) {
        console.warn("[Firebase Admin] getAuth initialization error:", err);
      }
    }
  }
  return _adminAuth;
}

export function getAdminDb(): Firestore | null {
  if (!_adminDb) {
    const app = getAdminApp();
    if (app) {
      try {
        _adminDb = getFirestore(app);
      } catch (err) {
        console.warn("[Firebase Admin] getFirestore initialization error:", err);
      }
    }
  }
  return _adminDb;
}

export const adminAuth = new Proxy({} as Auth, {
  get(_target, prop) {
    const auth = getAdminAuth();
    if (!auth) {
      throw new Error("Firebase Admin Auth is not configured (missing FIREBASE_SERVICE_ACCOUNT_KEY).");
    }
    const value = (auth as any)[prop];
    return typeof value === "function" ? value.bind(auth) : value;
  },
});

export const adminDb = new Proxy({} as Firestore, {
  get(_target, prop) {
    const db = getAdminDb();
    if (!db) {
      throw new Error("Firebase Admin Firestore is not configured (missing FIREBASE_SERVICE_ACCOUNT_KEY).");
    }
    const value = (db as any)[prop];
    return typeof value === "function" ? value.bind(db) : value;
  },
});

export default adminAuth;
