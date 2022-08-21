import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, takeUntil, timer } from 'rxjs';
import { TableName } from '../enums/table-name.enum';
import { Column } from '../models/column.model';
import { SqlQuery } from '../models/sql-query.model';
import { TableData } from '../models/table-data.model';
import { StorageService } from './storage.service';

const regex = /Select \* FROM ([a-zA-Z]+)/ig;

const QUERIES = 'queries';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private http: HttpClient,
    private storate: StorageService,
  ) { }

  private transforData = (data: any, query: string) => {
    let columns = [] as Column[];
    const [firstRow] = data ?? [];
    if (firstRow) {
      columns = Object.keys(firstRow).map((col) => ({
        colName: col,
        displayName: col,
        filtering: false,
        hidden: false,
        sorting: false,
      }));
    }
    return {
      columns,
      data: data ?? [] as any[],
      query,
      queryName: query,
    } as unknown as TableData;
  }

  getQueryList() {
    return this.storate.get<SqlQuery[]>(QUERIES);
  }

  getQuery(id: string) {
    const list = this.storate.get<SqlQuery[]>(QUERIES);
    return list.find(i => i.id === id);
  }

  saveQuery(newElement: SqlQuery) {
    const list = this.storate.get<SqlQuery[]>(QUERIES) ?? [];
    const existing = list.find(l => l.id === newElement.id);
    if (existing) {
      Object.assign(existing, newElement);
    } else {
      list.push(newElement);
    }
    this.storate.set(QUERIES, list);
    return { update: !!existing, added: !existing };
  }

  getData(query: string): Observable<TableData> {
    // const 
    const matchGroupsGenerator = query.replace(/\s\s+/g, ' ')
      .matchAll(regex);
    let groups: any[] = [];
    let current = matchGroupsGenerator.next();
    while (!current.done) {
      groups = groups.concat(current.value.filter(c => !c.toLowerCase().includes('from')));
      current = matchGroupsGenerator.next();
    }
    const [first] = groups;
    const find = Object.values(TableName).find(i => i === first?.toLowerCase());
    if (find) {
      return timer(2000).pipe(
        switchMap(() => this.http.get(`assets/json/${find}.json`)),
        map((data) => this.transforData(data, query)),
      );
    }
    return of<TableData>({
      columns: [] as Column[],
      data: [] as any[],
      query,
      queryName: query,
    } as unknown as TableData);
  }
}
