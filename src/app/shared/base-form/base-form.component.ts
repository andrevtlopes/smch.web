import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';


export abstract class BaseFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {}

  abstract submit();

  onSubmit() {
    if (this.form.valid) {
      this.submit();
    } else {
      console.log('formulario inválido');
      this.isValidacoesForm(this.form);
    }
  }

  isValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.isValidacoesForm(controle);
      }
    });
  }

  resetFields() {
    this.form.reset();
  }

  isValidTouched(campo: string) {
    return !this.form.get(campo).valid && (this.form.get(campo).touched || this.form.get(campo).dirty);
  }

  isRequired(campo: string) {
    return this.form
        .get(campo)
        .hasError(
          'required'
        ) && (this.form.get(campo).touched || this.form.get(campo).dirty);
  }

  isFieldWarning(field: string) {
    return this.form.get(field).errors &&
      !this.form.get(field).pristine;
  }

  isFieldEmpty(field: string) {
    return (
      (this.isFieldWarning(field)) ||
      (this.form.get(field).untouched && this.form.dirty)
    );
  }

  isWarnColored(field: string) {
    return this.isFieldWarning(field) ? 'warn' : 'primary';
  }
}
