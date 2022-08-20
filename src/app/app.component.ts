import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/core/navbar/navbar.component';

const imports = [
  CommonModule,
  RouterModule,

  // components
  NavbarComponent,
];

@Component({
  standalone: true,
  selector: 'sqb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports,
})
export class AppComponent {
  title = 'sql-query-builder';
}
