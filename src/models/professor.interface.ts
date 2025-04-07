import { Curso } from "./curso.interface";
import { Usuario } from "./usuario.interface";

export interface Professor extends Usuario {
    matricula: string;
    curso: Curso[];
}