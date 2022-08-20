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

  private transforData = (data: any) => {
    console.log(data);
    return data;
  }

  getData(query: string): Observable<TableData> {
    let apiCall;
    // TODO: simplified switch case by having simple if condition
    switch (query) {
      case TableName.Category:
        apiCall = this.http.get('/assets/category.json');
        break;
      case TableName.Customer:
        apiCall = this.http.get('/assets/customer.json');
        break;
      case TableName.Employee:
        apiCall = this.http.get('/assets/employee.json');
        break;
      case TableName.Order:
        apiCall = this.http.get('/assets/order.json');
        break;
      case TableName.Product:
        apiCall = this.http.get('/assets/product.json');
        break;
      case TableName.Region:
        apiCall = this.http.get('/assets/region.json');
        break;
      case TableName.Shipper:
        apiCall = this.http.get('/assets/shipper.json');
        break;
      case TableName.Supplier:
        apiCall = this.http.get('/assets/supplier.json');
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
      map(this.transforData),
    );
  }
}
