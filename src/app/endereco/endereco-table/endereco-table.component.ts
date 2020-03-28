import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EnderecoTableDataSource } from './endereco-table-datasource';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-table',
  templateUrl: './endereco-table.component.html',
  styleUrls: ['./endereco-table.component.css']
})
export class EnderecoTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EnderecoTableDataSource;

  constructor(private service: EnderecoService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'cep', 'logradouro', 'bairro', 'cidade', 'edit', 'delete'];

  ngOnInit() {
    this.dataSource = new EnderecoTableDataSource(this.service , this.paginator, this.sort);
  }
}
