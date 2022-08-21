import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, takeUntil, timer } from 'rxjs';
import { TableName } from '../enums/table-name.enum';
import { Column } from '../models/column.model';
import { SqlQuery } from '../models/query.model';
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

  getList() {
    return this.storate.get(QUERIES);
  }

  addList(newElement: SqlQuery) {
    const list = this.storate.get<SqlQuery[]>(QUERIES) ?? [];
    list.push(newElement);
    this.storate.set(QUERIES, list);
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
    let apiCall: Observable<any>;
    // TODO: simplified switch case by having simple if condition
    switch (first?.toLowerCase()) {
      case TableName.Category:
        apiCall = this.http.get('/assets/json/category.json');
        break;
      case TableName.Customer:
        apiCall = this.http.get('/assets/json/customer.json');
        break;
      case TableName.Employee:
        apiCall = this.http.get('/assets/json/employee.json');
        break;
      case TableName.Order:
        apiCall = this.http.get('/assets/json/order.json');
        break;
      case TableName.Product:
        apiCall = this.http.get('/assets/json/product.json');
        break;
      case TableName.Region:
        apiCall = this.http.get('/assets/json/region.json');
        break;
      case TableName.Shipper:
        apiCall = this.http.get('/assets/json/shipper.json');
        break;
      case TableName.Supplier:
        apiCall = this.http.get('/assets/json/supplier.json');
        break;
      default:
        return of<TableData>({
          columns: [] as Column[],
          data: [] as any[],
          query,
          queryName: query,
        } as unknown as TableData);
    }
    return timer(5000).pipe(
      switchMap(() => apiCall),
      map((data) => this.transforData(data, query)),
    );
  }
}
