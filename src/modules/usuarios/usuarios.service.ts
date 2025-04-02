import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/core/service/firestore-service.service';
import { Usuario } from 'src/models/usuario.interface';

@Injectable()
export class UsuariosService {
    constructor(private firestoreService: FirestoreService) { }

    getUserById(id: string) {
        const path = `usuarios/${id}`;
        return this.firestoreService.getDocument(path);
    }

    createUser(usuario: Usuario) {
        const path = `usuarios`;
        return this.firestoreService.createDocument(path, usuario);
    }

    updateUserById(id: string, usuario: Usuario) {
        const path = `usuarios/${id}`;
        return this.firestoreService.updateDocument(path, usuario);
    }

    deleteUserById(id: string) {
        const path = `usuarios/${id}`;
        return this.firestoreService.deleteDocument(path);
    }
}
