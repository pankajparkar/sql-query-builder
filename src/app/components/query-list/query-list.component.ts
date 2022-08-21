import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'sqb-query-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.scss']
})
export class QueryListComponent implements OnInit {

  queries = this.queryService.getQueryList();

  constructor(
    private queryService: QueryService,
  ) { }

  ngOnInit(): void {
  }

}
