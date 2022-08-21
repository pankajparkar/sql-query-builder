import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryService } from 'src/app/services/query.service';
import { finalize, startWith, Subject, takeUntil } from 'rxjs';
import { QueryInputComponent } from '../core/query-input/query-input.component';
import { TableComponent } from '../core/table/table.component';

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

  // components
  QueryInputComponent,
];

@Component({
  selector: 'sqb-query-builder',
  standalone: true,
  imports,
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent {

  destroyed$ = new Subject<void>();
  sqlQuery = '';
  showTableView = false;
  isLoading = false;

  @ViewChild('tableView', { read: ViewContainerRef, static: false })
  tableView!: ViewContainerRef;
  tableComponentRef: ComponentRef<TableComponent> | undefined;

  constructor(
    private query: QueryService,
  ) { }

  run() {
    this.isLoading = true;
    this.showTableView = true;
    this.query.getData(this.sqlQuery)
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

  save() { }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
