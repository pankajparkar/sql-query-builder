import { Component, ComponentRef, OnDestroy, OnInit, Query, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryService } from 'src/app/services/query.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { QueryInputComponent } from '../core/query-input/query-input.component';
import { TableComponent } from '../core/table/table.component';
import { SqlQuery } from 'src/app/models/sql-query.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const imports = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,

  // components
  QueryInputComponent,
  RouterModule,
];

@Component({
  selector: 'sqb-query-edit',
  standalone: true,
  imports,
  templateUrl: './query-edit.component.html',
  styleUrls: ['./query-edit.component.scss']
})
export class QueryEditComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject<void>();
  showTableView = false;
  sqlQuery = '';
  isLoading = false;
  editTitle = false;
  id = (Math.random() * 1000).toFixed();
  queryName = `Query ${this.id}`;

  @ViewChild('tableView', { read: ViewContainerRef, static: false })
  tableView!: ViewContainerRef;
  tableComponentRef: ComponentRef<TableComponent> | undefined;

  constructor(
    private queryService: QueryService,
  ) { }

  run() {
    this.isLoading = true;
    this.showTableView = true;
    this.queryService.getData(this.sqlQuery)
      .pipe(takeUntil(this.destroyed$), finalize(() => this.isLoading = false))
      .subscribe(async ({ columns, data, query, queryName }) => {
        if (!this.tableComponentRef) {
          const tableComponent = await import('../core/table/table.component')
            .then(i => i.TableComponent);
          this.tableComponentRef = this.tableView.createComponent(tableComponent);
        }
        this.tableComponentRef.setInput('tableData', data);
        this.tableComponentRef.setInput('columns', columns);
      });
  }

  save() {
    const queryObj = {
      id: this.id,
      name: this.queryName,
      rawQuery: this.sqlQuery,
      details: {
        columns: [],
        isJoinQuery: false,
        tables: [],
      }
    } as SqlQuery;
    console.log(queryObj);
    this.queryService.addList(queryObj);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
