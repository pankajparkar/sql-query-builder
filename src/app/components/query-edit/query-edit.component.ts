import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { finalize, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { QueryService } from 'src/app/services/query.service';
import { QueryInputComponent } from '../core/query-input/query-input.component';
import { TableComponent } from '../core/table/table.component';
import { SqlQuery } from 'src/app/models/sql-query.model';
import { QueryHelperService } from 'src/app/services/query-helper.service';
import { ListenToRouteDirective } from 'src/app/directives/listen-to-route.directive';
import { QueryBuilderComponent } from '../core/query-builder/query-builder.component';

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
  RouterModule,
  MatSnackBarModule,
  MatExpansionModule,

  // components
  QueryInputComponent,
  ListenToRouteDirective,
  QueryBuilderComponent,
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
  panelOpenState = true;
  isLoading = false;
  destroyed$ = new Subject<void>();
  queryList = this.queryService.getQueryList() ?? [];
  selectedQuery: string | undefined | null;
  searchText = '';

  @ViewChild('tableView', { read: ViewContainerRef, static: false })
  tableView!: ViewContainerRef;
  tableComponentRef: ComponentRef<TableComponent> | undefined;

  clearFields() {
    this.isLoading = false;
    this.showTableView = false;
    this.query = undefined
    this.searchText = '';
    this.selectedQuery = undefined;
  }

  constructor(
    private queryService: QueryService,
    private queryHelper: QueryHelperService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private location: Location,
    private router: Router,
  ) { }

  async run() {
    if (!this.query?.rawQuery) return;
    this.isLoading = true;
    this.showTableView = true;
    if (!this.tableComponentRef) {
      const tableComponent = await import('../core/table/table.component')
        .then(i => i.TableComponent);
      this.tableComponentRef = this.tableView.createComponent(tableComponent);
    }
    this.tableComponentRef?.setInput('isLoading', this.isLoading);
    this.queryService.getData(this.query.rawQuery)
      .pipe(
        takeUntil(this.destroyed$),
        finalize(() => {
          this.isLoading = false
          this.tableComponentRef?.setInput('isLoading', this.isLoading);
        }))
      .subscribe(({ columns, data, query, queryName }) => {
        this.tableComponentRef?.setInput('tableData', data);
        this.tableComponentRef?.setInput('columns', columns);
      });
  }

  updateSearchText() {
    this.tableComponentRef?.setInput('searchText', this.searchText);
  }

  onNewQuery() {
    this.router.navigate(['query/new']);
    this.snackbar.open('New query opened.');
  }

  save() {
    if (!this.query?.rawQuery) return;
    const { update, added } = this.queryService.saveQuery(this.query!);
    if (added) {
      this.location.replaceState(`/query/${this.query?.id}`);
      this.snackbar.open(`${this.query?.name} added successfully.`);
    } else if (update) {
      this.snackbar.open(`${this.query?.name} updated successfully.`);
    } else {
      this.snackbar.open(`${this.query?.name} save operation failed.`);
    }
  }

  onQueryChange(id: string | undefined | null) {
    this.query = this.queryService.getQuery((id || '').toString());
    this.selectedQuery = id;
  }

  listenToRoute() {
    this.clearFields();
    this.query = this.queryHelper.createNew();
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id && id !== 'new') {
      this.onQueryChange(id);
    } else {
      this.query = this.queryHelper.createNew();
    }
  }

  ngOnDestroy() {
    this.tableComponentRef = undefined;
    this.tableView.clear();
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
