import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../core/table/table.component';
import { QueryService } from 'src/app/services/query.service';
import { Observable } from 'rxjs';
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

  // components
  TableComponent,
]

@Component({
  selector: 'sqb-query-builder',
  standalone: true,
  imports,
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent {

  sqlQuery = '';
  tableData$: Observable<TableData> | undefined;

  constructor(
    private query: QueryService
  ) { }

  run() {
    this.tableData$ = this.query.getData(this.sqlQuery);
  }
  save() {

  }
}
