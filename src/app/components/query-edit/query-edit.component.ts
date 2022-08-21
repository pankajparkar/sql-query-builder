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
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QueryHelperService } from 'src/app/services/query-helper.service';

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

  showTableView = false;
  query: SqlQuery | undefined;
  isLoading = false;
  editTitle = false;
  destroyed$ = new Subject<void>();

  @ViewChild('tableView', { read: ViewContainerRef, static: false })
  tableView!: ViewContainerRef;
  tableComponentRef: ComponentRef<TableComponent> | undefined;

  constructor(
    private queryService: QueryService,
    private queryHelper: QueryHelperService,
    private route: ActivatedRoute,
  ) { }

  run() {
    if (!this.query) return;
    this.isLoading = true;
    this.showTableView = true;
    this.queryService.getData(this.query.rawQuery)
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
    this.queryService.addList(this.query!);
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id && id !== 'new') {
      this.query = this.queryService.getQuery(id);
    } else {
      this.query = this.queryHelper.createNew();
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
