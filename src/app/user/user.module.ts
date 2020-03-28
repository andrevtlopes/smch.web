import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserListaComponent } from './user-lista/user-lista.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserFormComponent,
    UserListaComponent
  ]
})
export class UserModule {}
