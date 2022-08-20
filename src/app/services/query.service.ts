import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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
    const table = query.includes('test');
    let apiCall;
    switch (query) {
      case 'categories':
        apiCall = this.http.get('/assets/categories.json');
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
