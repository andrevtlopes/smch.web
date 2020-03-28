import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco';

@Component({
  selector: 'app-endereco-lista',
  templateUrl: './endereco-lista.component.html',
  styleUrls: ['./endereco-lista.component.css']
})
export class EnderecoListaComponent implements OnInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data: Endereco[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  endereco$: Observable<Endereco[]>;

  constructor(private servico: EnderecoService) {}

  ngOnInit() {
    this.endereco$ = this.servico.listar();
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({ }),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.servico.listar();
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })

      ).subscribe(data => this.data = data);
  }

  onSubmit(endereco: Endereco) {
    this.servico.cadastrar(endereco);
  }

  // applyFilter(filterValue: string) {
  //   this.data.filter = filterValue.trim().toLowerCase();
  // }
}
