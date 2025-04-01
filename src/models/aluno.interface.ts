import { Curso } from "./curso.interface";
import { Usuario } from "./usuario.interface";

export interface Aluno extends Usuario {
    uid: string;
    cursos: Curso[];
}