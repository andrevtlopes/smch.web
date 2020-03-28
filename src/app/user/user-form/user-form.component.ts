import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { BaseFormComponent } from '../../shared/base-form/base-form.component';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends BaseFormComponent
  implements OnInit, OnDestroy {
  rota: Subscription;

  responsables: any;
  user: any = {};
  private formChanged = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.rota = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.user = this.userService.getUserById(id);
      if (this.user === null) {
        this.user = {};
      }
    });
    this.form = this.fb.group({
      name: [this.user.nome, Validators.required],
      username: [this.user.username , Validators.required],
      responsable: [this.user.responsable],
      cpf: [''],
      rg: [''],
      phone: ['', Validators.required],
      address: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userService
      .getResponsibles()
      .subscribe(dados => (this.responsables = dados));
  }

  ngOnDestroy() {
    this.rota.unsubscribe();
  }

  submit() {
    console.log(this.form.value);
    // this.userService.
  }
}
