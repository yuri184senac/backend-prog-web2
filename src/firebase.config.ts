import { cert, initializeApp } from "firebase-admin/app";

export function InitializeFirebase() {
    const serviceAccount: string = 'src/keys/serviceinfe.json';
    initializeApp({
        credential: cert(serviceAccount)
    });
}