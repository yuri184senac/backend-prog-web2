export interface Usuario {
    uid: string;
    login: string;
    senha: string;
    ativo: boolean;
    nome: string;    
    tipo: 'aluno' | 'professor' | 'admin';
}