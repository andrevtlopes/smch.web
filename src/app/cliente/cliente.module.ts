import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClienteFormComponent,
    ClienteListComponent,
  ]
})
export class ClienteModule { }
