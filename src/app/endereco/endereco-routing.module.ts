import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoDetalheComponent } from './endereco-detalhe/endereco-detalhe.component';
import { EnderecoTableComponent } from './endereco-table/endereco-table.component';
import { EnderecoFormComponent } from './endereco-form/endereco-form.component';

const routes: Routes = [
  { path: '', component: EnderecoTableComponent },
  { path: 'editar/:id', component: EnderecoFormComponent },
  { path: 'novo', component: EnderecoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EnderecoRoutingModule { }
