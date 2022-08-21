import { Injectable } from '@angular/core';
import { QueryDetails } from '../models/query-details.model';
import { SqlQuery } from '../models/sql-query.model';

@Injectable({
  providedIn: 'root'
})
export class QueryHelperService {

  constructor() { }

  createNew(): SqlQuery {
    const id = (Math.random() * 1000).toFixed();
    return {
      id,
      name: `Query ${id}`,
      rawQuery: '',
      details: {
        columns: [],
        isJoinQuery: false,
        tables: [],
      } as QueryDetails
    }
  }
}
