import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription, empty, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, switchMap, tap, map } from 'rxjs/operators';
import { MatSelect } from '@angular/material';

import { EnderecoService } from '../endereco.service';
import { BaseFormComponent } from '../../shared/base-form/base-form.component';
import { Endereco, Estado, Cidade } from '../endereco';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent extends BaseFormComponent
  implements OnInit, OnDestroy {
  @ViewChildren(MatSelect)
  selectComponent: QueryList<MatSelect>;

  rota: Subscription;

  ufs: Estado[];
  cidades: Cidade[];
  endereco: Endereco;
  private formChanged = false;

  constructor(
    private fb: FormBuilder,
    private enderecoService: EnderecoService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.enderecoService.getUfs().subscribe(dados => (this.ufs = dados));

    this.rota = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.enderecoService.getEnderecoEspecificoById(id).subscribe(value => {
        this.endereco = value;
        // endereco.complemento = value.complemento;
        // endereco.nro = value.nro;
        this.fillForm(this.endereco);
      });
      if (this.endereco === null) {
        // TODO: nada
      }
    });
    this.form = this.fb.group({
      cep: ['', [Validators.required, this.cepValidator]],
      site: [''],
      numero: [''],
      complemento: [''],
      logradouro: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      sigla: ['']
    });

    this.form
      .get('cep')
      .statusChanges.pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(
          status =>
            status === 'VALID'
              ? this.enderecoService.getEnderecoByCep(
                  this.form.get('cep').value
                )
              : empty()
        )
      )
      .subscribe(dados => {
        console.log(dados);
        return dados ? this.fillForm(dados) : {};
      });

    this.form
      .get('uf')
      .valueChanges.pipe(
        tap(estado => console.log('Novo estado: ', estado)),
        map(estado => this.ufs.filter(e => e.sigla === estado)),
        map(
          estados =>
            estados && estados.length > 0 ? estados[0].sigla : empty()
        ),
        switchMap((estadoId: string) =>
          this.enderecoService.getCidadesByUf(estadoId)
        ),
        tap(console.log)
      )
      .subscribe(cidades => (this.cidades = cidades));
  }

  ngOnDestroy() {
    this.rota.unsubscribe();
  }

  fillForm(dados: Endereco) {
    // this.formulario.setValue({});
    this.form.patchValue({
      logradouro: dados.endereco.logradouro.nome,
      bairro: dados.endereco.bairro.nome,
      complemento: dados.complemento,
      numero: dados.nro,
      cep: dados.endereco.cep
      // uf: dados.cidade.uf.nome,
      // cidade: dados.cidade,
    });
    this.enderecoService
      .getCidadesByUf(dados.endereco.cidade.uf.nome)
      .subscribe(cidades => (this.cidades = cidades));

    this.selectComponent.forEach((selects: MatSelect) => {
      if (selects.id === 'estado') {
        selects.writeValue(dados.endereco.cidade.uf.nome);
      } else {
        selects.writeValue(dados.endereco.cidade.nome);
        console.log(dados.endereco.cidade.nome);
      }
      // selects.writeValue(dados.cidade.uf.nome);
      // selects[1].writeValue(dados.cidade.nome);
      console.log(selects);
    });

    this.selectComponent.last.value = dados.endereco.cidade.nome;
  }

  submit() {
    let endereco: Endereco;
    const formValue = this.form.value;
    const cidade = this.cidades.find(value => value.nome === formValue.cidade);

    endereco = {
      id: this.endereco ? this.endereco.id : null,
      nro: formValue.numero,
      complemento: formValue.complemento,
      endereco: {
        id: this.endereco ? this.endereco.endereco.id : null,
        cep: formValue.cep,
        logradouro: {
          id: this.endereco ? this.endereco.endereco.id : null,
          nome: formValue.logradouro
        },
        bairro: {
          id: this.endereco ? this.endereco.endereco.bairro.id : null,
          nome: formValue.bairro
        },
        cidade: {
          id: cidade.id,
          nome: cidade.nome,
          uf: {
            id: cidade.uf.id,
            nome: cidade.uf.nome,
            sigla: cidade.uf.sigla,
            pais: {
              id: cidade.uf.pais.id,
              nome: cidade.uf.pais.nome
            }
          }
        }
      }
    };
    console.log(JSON.stringify(endereco));
    console.log(this.form.value);

    // endereco.endereco.cep = formValue.cep;
    // endereco.endereco.bairro.nome = formValue.bairro;
    // endereco.complemento = formValue.complemento;
    // endereco.nro = formValue.numero;
    // console.log(this.cidades);

    // console.log(cidade);
    // endereco.endereco.cidade.nome = cidade.nome;
    // endereco.endereco.cidade.id = cidade.id;
    // endereco.endereco.cidade.uf.sigla = cidade.uf.sigla;
    // endereco.endereco.cidade.uf.nome = cidade.uf.nome;
    // endereco.endereco.cidade.uf.id = cidade.uf.id;
    // endereco.endereco.cidade.uf.pais.nome = "Brasil";
    // endereco.endereco.cidade.uf.pais.id = 1;

    console.log(endereco);
    console.log(this.route.snapshot.url[0].path);
    if (this.route.snapshot.url[0].path === 'editar') {
      this.enderecoService.editar(endereco);
    } else {
      this.enderecoService.cadastrar(endereco);
    }

    //
  }

  cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{5}-[0-9]{3}$/;
      const valida2 = /^[0-9]{8}$/;
      return validacep.test(cep) || valida2.test(cep)
        ? null
        : { cepInvalido: true };
    }
    return null;
  }
}
