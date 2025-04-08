import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/core/service/firestore-service.service';
import { Professor } from 'src/models/professor.interface';

@Injectable()
export class ProfessoresService {
    constructor(private firestoreService: FirestoreService) { }

    getProfessorAll() {
        const path = 'professores';
        return this.firestoreService.getCollection(path);
    }

    getProfessorById(id: string) {
        const path = `professores/${id}`;
        return this.firestoreService.getDocument(path);
    }

    createProfessor(professor: Professor) {
        const path = 'professores';
        return this.firestoreService.createDocument(path, professor);
    }

    updateProfessorById(id: string, professor: Professor) {
        const path = `professores/${id}`;
        return this.firestoreService.updateDocument(path, professor);
    }

    deleteProfessorById(id: string) {
        const path = `professor/${id}`;
        return this.firestoreService.deleteDocument(path);
    }


}
