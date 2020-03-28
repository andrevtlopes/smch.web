import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-lista',
  templateUrl: './user-lista.component.html',
  styleUrls: ['./user-lista.component.css']
})
export class UserListaComponent implements OnInit {

  @Input() users: any;

  constructor() { }

  ngOnInit() {
  }

}
