import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco, Estado, Cidade } from './endereco';
import { tap, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private readonly API = 'http://127.0.0.1:8080/endereco';
  private readonly API_E = 'http://127.0.0.1:8080/especifico';

  constructor(private http: HttpClient) {}

  cadastrar(endereco: Endereco) {
    return this.http
      .post<Endereco>(this.API_E, endereco)
      .pipe(tap(console.log))
      .subscribe(
        dados => {
          console.log(dados);
          // reseta o form
          // this.formulario.reset();
          // this.resetar();
        },
        (error: any) => alert('erro')
      );
  }

  editar(endereco: Endereco) {
    return this.http.put<Endereco>(this.API_E, endereco);
  }

  listar() {
    return this.http.get<Endereco[]>(this.API_E).pipe(tap(console.log));
  }

  getEnderecoById(id: number) {
    return this.http.get<Endereco>(this.API_E + '/' + id);
  }

  getEnderecoEspecificoById(id: number) {
    return this.http.get<Endereco>(this.API_E + '/' + id).pipe(tap(console.log));
  }

  listarEstados() {
    return this.http.get<Estado[]>(this.API).pipe(tap(console.log));
  }

  getCidades() {
    return this.http.get<Cidade[]>(this.API + '/cidade').pipe(tap(console.log));
  }

  getCidadesByUf(siglaUf: string) {
    return this.http.get<Cidade[]>(this.API + '/cidade/siglaUf/' + siglaUf);
  }

  getUfs() {
    return this.http.get<Estado[]>(this.API + '/uf').pipe(tap(console.log));
  }

  getEnderecoByCep(cep: string) {
    return this.http.get<Endereco>(this.API_E + '/cep/' + cep).pipe(tap(console.log)
    );
  }
}
