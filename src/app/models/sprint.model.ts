export interface Sprint {
    id: number;
    name: string;
    dtInicio: string;
    dtFinal: string;
    status: string;
    Estorias: Array<Estoria>;

}

export interface Estoria {
    ordemPrioridade: number;
    titulo: string;
    detalhe: string;
    estimativaHoras: number;
    previsoes: Array<DataEstoria>;
}

export interface DataEstoria {
    data: string;
    hrInicio: string;
    hrFinal: string;
}

export interface Usuario {
    nome: string;
    login: string;
    email: string;
    senha: string;
    token: string;
}

export interface Recurso {
    nome: string;
    loginRede: string;
    senha: string;
    email: string;
    token: string;
}