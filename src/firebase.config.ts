import { cert, initializeApp } from "firebase-admin/app";

export function InitializeFirebase() {
    const serviceAccount: string = 'src/keys/serviceinfo.json';
    initializeApp({
        credential: cert(serviceAccount)
    });
}