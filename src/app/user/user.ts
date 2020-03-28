// export interface User {
//   id: number;
//   email: string[];
//   senha: string;
//   nome: string;
//   telefone: string[];
//   ddd: number;
//   ddi: number;
// }

export interface User {
  id: number;
  username: string;
  name: string;
  password: string;
  email: string;
  address: string;
  cpf: string;
  rg: string;
  phone: string;
  reponsible: User;
  admin: boolean;
  fcmToken: string;
}
