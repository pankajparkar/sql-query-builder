import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryService } from 'src/app/services/query.service';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

const imports = [
  CommonModule,
  MatListModule,
  MatCardModule,
  RouterModule,
];

@Component({
  selector: 'sqb-query-list',
  standalone: true,
  imports,
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
