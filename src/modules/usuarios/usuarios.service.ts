import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/core/service/firestore-service.service';

@Injectable()
export class UsuariosService {
    constructor(private firestoreService: FirestoreService) { }

    getUserById(path: string) {
        return this.firestoreService.getDocument(path);
    }
}
