import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sqb-query-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
