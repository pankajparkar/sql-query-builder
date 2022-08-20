import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { TableViewComponent } from '../table-view/table-view.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  TableViewComponent,
]

@Component({
  selector: 'sqb-query-builder',
  standalone: true,
  imports,
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato',];
}
