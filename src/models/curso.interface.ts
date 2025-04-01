import { Aluno } from "./aluno.interface";
import { Professor } from "./professor.interface";

export interface Curso {
    uid: string,
    nome: string,
    qtdeAlunosMax: number,
    alunos: Aluno[];
    professor: Professor[];
}