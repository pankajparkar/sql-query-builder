import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlQuery } from 'src/app/models/sql-query.model';
import { QueryInputComponent } from '../query-input/query-input.component';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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

  // components
  QueryInputComponent,
];

@Component({
  selector: 'sqb-query-builder',
  standalone: true,
  imports,
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
})
export class QueryBuilderComponent {

  editTitle = false;
  @Input()
  selectedQuery: string | undefined | null;
  @Input() query: SqlQuery | undefined;
  @Input() queryList: SqlQuery[] = [];

  @Output() queryChange = new EventEmitter<string>();
  @Output() save = new EventEmitter();
  @Output() run = new EventEmitter();

  @ViewChild('queryInput', { read: QueryInputComponent })
  queryInput!: QueryInputComponent;
}
