import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryService } from 'src/app/services/query.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TableData } from 'src/app/models/table-data.model';

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
]

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
  tableData$: Observable<TableData> | undefined;

  @ViewChild('tableView', { read: ViewContainerRef })
  tableView!: ViewContainerRef;

  constructor(
    private query: QueryService,
  ) { }

  async run() {
    const tableComponent = await import('../core/table/table.component')
      .then(i => i.TableComponent);
    const tableCompRef = this.tableView.createComponent(tableComponent);
    this.query.getData(this.sqlQuery)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ columns, data, query, queryName }) => {
        tableCompRef.setInput('tableData', data);
        tableCompRef.setInput('columns', columns);
      });
  }

  save() { }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
