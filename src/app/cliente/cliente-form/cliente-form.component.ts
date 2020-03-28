import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseFormComponent } from '../../shared/base-form/base-form.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent extends BaseFormComponent
  implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.construirForm();
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  submit() {
    throw new Error('Method not implemented.');
  }

  construirForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cnpj: [''],
      cpf: [''],
      genero: ['', Validators.required],
      ddd: ['', Validators.required],
      ddi: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }
}
