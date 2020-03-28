import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListaComponent } from './user-lista/user-lista.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', component: UserListaComponent },
  { path: 'editar/:id', component: UserFormComponent },
  { path: 'novo', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {}
