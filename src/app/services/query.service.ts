import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { TableName } from '../enums/table-name.enum';
import { Column } from '../models/column.model';
import { TableData } from '../models/table-data.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private http: HttpClient,
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

  getData(query: string): Observable<TableData> {
    let apiCall;
    // TODO: simplified switch case by having simple if condition
    switch (query) {
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
    return apiCall.pipe(
      map((data) => this.transforData(data, query)),
    );
  }
}
