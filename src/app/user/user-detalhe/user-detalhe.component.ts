import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detalhe',
  templateUrl: './user-detalhe.component.html',
  styleUrls: ['./user-detalhe.component.css']
})
export class UserDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private service: UserService) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (param) => {
    //     this.id = param['id'];
    //     this.curso = this.service.(this.id);
    //   }
    // )
  }

}
