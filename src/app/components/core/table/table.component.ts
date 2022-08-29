import { Component, Inject, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, ColumnApi, GridApi, GridReadyEvent, } from 'ag-grid-community';

import { Column } from 'src/app/models/column.model';
import { LoadingComponent } from '../loading/loading.component';

const imports = [
  CommonModule,
  AgGridModule,
  LoadingComponent,
];

@Component({
  selector: 'sqb-table',
  standalone: true,
  imports,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {

  private gridApi: GridApi<any> | undefined;
  private columnApi: ColumnApi | undefined;

  displayedColumns: ColDef[] = [];
  @Input()
  tableData: any[] = [];
  @Input()
  columns: Column[] = [];
  @Input()
  isLoading: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  private simpleChangeCheck(change: SimpleChange) {
    return change && change.currentValue !== change.previousValue;
  }

  public overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
  public overlayNoRowsTemplate =
    '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">No data found</span>';

  ngOnChanges(changes: SimpleChanges) {
    const columns = changes['columns'];
    const isLoading = changes['isLoading'];
    const tableData = changes['tableData'];
    if (this.simpleChangeCheck(columns)) {
      this.displayedColumns = this.columns.map(col => ({
        headerName: col.displayName, field: col.colName, sortable: true, filter: true, resizable: true,
      }));
    }
    if (this.simpleChangeCheck(isLoading)) {
      if (this.isLoading) {
        this.gridApi?.hideOverlay();
        this.gridApi?.showLoadingOverlay();
      } else {
        this.gridApi?.hideOverlay();
      }
    }
    if (this.simpleChangeCheck(tableData)) {
      setTimeout(() => this.setAutosize());
      // this.gridApi?.sizeColumnsToFit();
      // columnApi.autoSizeAllColumns();
      // this.gridApi?.autoSizeColumns(allColumnIds, skipHeader);
    }
  }

  setAutosize() {
    if (this.columnApi) {
      const colIds = this.columnApi?.getAllColumns()!.map(
        (c: any) => c.colId
      );
      this.columnApi?.autoSizeColumns(colIds)
    }
  }
  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    console.log(this.gridApi)
  }

}