import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full' , redirectTo: 'endereco' },
  // { path: '', component: HomeComponent },
  // { path: 'user', component: UserComponent },
  // { path: 'user/:id', component: UserDetalheComponent },
  { path: 'endereco', loadChildren: './endereco/endereco.module#EnderecoModule'}, // canActivate: [AuthGuard]
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }, // canActivate: [AuthGuard]
  { path: '', pathMatch: 'full', redirectTo: 'cliente' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
