import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../core/table/table.component';

const imports = [
  CommonModule,
  ReactiveFormsModule,
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

  run() {

  }
  save() {

  }
}
