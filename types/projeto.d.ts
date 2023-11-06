declare namespace Projeto {
    type Usuario = {
        id?: number;
        nome: string;
        login: string;
        senha: string;
        email: string;
    };

    type Recurso = {
        id?: number;
        nome: string;
        chave: string;
    }
}