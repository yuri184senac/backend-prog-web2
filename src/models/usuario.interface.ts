export interface Usuario {
    uid: string;
    login: string;
    senha: string;
    nome: string;
    tipo: 'aluno' | 'professor' | 'admin';
}