import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sqb-query-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.scss']
})
export class QueryInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
