export interface Endereco {
  id: number;
  nro: number;
  complemento: string;
  endereco: {
    id: number;
    cep: string;
    logradouro: {
      id: number;
      nome: string;
    };
    bairro: {
      id: number;
      nome: string;
    };
    cidade: Cidade;
  };
}

export interface Cidade {
    id: number;
    nome: string;
    uf: Estado;
}

export interface Estado {
  id: number;
  nome: string;
  sigla: string;
  pais: {
    id: number;
    nome: string;
  };
}
