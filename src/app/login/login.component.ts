import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  private createForm() {
    this.form = new FormGroup({ // tslint:disable-next-line
      email: new FormControl("", [
        Validators.required
        // patternValidator(
        //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // )
      ]), senha: new FormControl('', Validators.required) });
  }

  public login() {
    console.log(this.form.value);
  }

  submit() {
    this.authService.login(this.form.value);
  }
}
