import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoListaComponent } from './endereco-lista/endereco-lista.component';
import { EnderecoDetalheComponent } from './endereco-detalhe/endereco-detalhe.component';
import { AppMaterialModule } from '../app.material.module';
import { EnderecoTableComponent } from './endereco-table/endereco-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';


@NgModule({
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    AppMaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  declarations: [
    EnderecoListaComponent,
    EnderecoDetalheComponent,
    EnderecoTableComponent,
    EnderecoFormComponent
  ]
})
export class EnderecoModule {}
