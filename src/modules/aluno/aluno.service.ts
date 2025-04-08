import { Injectable } from '@nestjs/common';
import { FirestoreService } from 'src/core/service/firestore-service.service';
import { Aluno } from 'src/models/aluno.interface';

@Injectable()
export class AlunoService {
    constructor(private firestoreService: FirestoreService) { }

    getAlunoAll() {
        const path = 'alunos';
        return this.firestoreService.getCollection(path);
    }

    getAlunoById(id: string) {
        const path = `alunos/${id}`;
        return this.firestoreService.getDocument(path);
    }

    createAluno(aluno: Aluno) {
        const path = `alunos`;
        return this.firestoreService.createDocument(path, aluno);
    }

    updateAlunoById(id: string, aluno: Aluno) {
        const path = `alunos/${id}`;
        return this.firestoreService.updateDocument(path, aluno);
    }

    deleteAlunoById(id: string) {
        const path = `alunos/${id}`;
        return this.firestoreService.deleteDocument(path);
    }

}
