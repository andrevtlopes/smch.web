import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../endereco';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-detalhe',
  templateUrl: './endereco-detalhe.component.html',
  styleUrls: ['./endereco-detalhe.component.css']
})
export class EnderecoDetalheComponent implements OnInit {

  endereco$: Observable<Endereco[]>;

  constructor(private servico: EnderecoService) { }

  ngOnInit() {
    this.endereco$ = this.servico.listar();
  }

  onSubmit(endereco: Endereco) {
    this.servico.cadastrar(endereco);
  }

}
