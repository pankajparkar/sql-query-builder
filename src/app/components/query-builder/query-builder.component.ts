import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sqb-query-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
