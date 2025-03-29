import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirestoreServiceService {
    private firestore = admin.firestore();
    constructor() { }

    async isDocumentExist(path: string): Promise<boolean> {
        const doc = await this.getDocument(path);
        if (!doc.exists) { return false; }
        return true;
    }

    getDocument(documentPath: string) {
        try {
            return this.firestore.doc(documentPath).get();
        } catch (err) {
            throw new Error;

        }
    }

}
