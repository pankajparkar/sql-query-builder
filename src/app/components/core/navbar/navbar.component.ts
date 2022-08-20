import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const imports = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  RouterModule,
];

@Component({
  selector: 'sqb-navbar',
  standalone: true,
  imports,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
