import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sqb-table-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
