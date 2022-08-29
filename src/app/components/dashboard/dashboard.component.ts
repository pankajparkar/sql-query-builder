import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const imports = [
  CommonModule,
  MatCardModule,
  RouterModule,
  MatIconModule,
];

@Component({
  selector: 'sqb-dashboard',
  standalone: true,
  imports,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
