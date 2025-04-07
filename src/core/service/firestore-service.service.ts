import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';

@Injectable()
export class FirestoreService {

    constructor() { }

    async isDocumentExist(path: string): Promise<boolean> {
        const doc = await this.getDocument(path);
        if (!doc.exists) { return false; }
        return true;
    }

    public getDocument(documentPath: string) {
        try {
            return firestore().doc(documentPath).get();
        } catch (err) {
            throw new Error;

        }
    }

    //Pegar a referência do documento
    public async getDocumentRefPath(path: string, id: string) {
        const resultado = await firestore().doc(path + '/' + id).get();
        return resultado.ref.path;
    }

    //Pegar o path do documento
    public getDocumentPath(path: string) {
        return firestore().doc(path);
    }

    public getCollectionPath(path: string) {
        return firestore().collection(path);
    }

    //Pegar Colecao
    public async getCollection(collectionPath: string): Promise<any> {
        return firestore().collection(collectionPath).get().then(resultado => {
            const data: firestore.DocumentData = [];
            resultado.docs.map((dados) => {
                data.push({ id: dados.id, ...dados.data() });
            });
            return data;
        });
    }

    //Atualizar documento
    public updateDocument(path: string, data: any) {
        return firestore().doc(path).update(data);
    }

    // Filtrar Colecao ou Documento
    public queryCollection(
        reference: firestore.CollectionReference,
        parameter: string,
        queryType: firestore.WhereFilterOp,
        value: any
    ): Promise<firestore.QuerySnapshot<firestore.DocumentData>> {
        return reference.where(parameter, queryType, value).get();
    }

    public createDocument(path: string, object: any, documentName?: string) {
        if (documentName === undefined) { //ele verifica primeiro se documentName está vazio pra não dar erro ao criar um documento escrito = "undefined"
            return firestore().collection(path).doc().set(object); //estou utilizando .set() em vez de .create() porque o .set() substitui os dados se ja existirem.
        } else {
            return firestore().collection(path).doc(documentName).set(object);
        }
    }

    public deleteDocument(path: string) {
        return firestore().doc(path).delete();
    }


}
