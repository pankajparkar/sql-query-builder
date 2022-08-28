import { AfterViewInit, Component, Input, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Column } from 'src/app/models/column.model';
import { LoadingComponent } from '../loading/loading.component';

const imports = [
  CommonModule,
  MatTableModule,
  MatPaginatorModule,
  LoadingComponent,
];

@Component({
  selector: 'sqb-table',
  standalone: true,
  imports,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  displayedColumns: string[] = [];
  @Input()
  tableData: any[] = [];
  @Input()
  columns: Column[] = [];
  @Input()
  isLoading: boolean = false;

  dataSource: MatTableDataSource<any[]> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private simpleChangeCheck(change: SimpleChange) {
    return change && change.currentValue !== change.previousValue;
  }

  ngOnChanges(changes: SimpleChanges) {
    const columns = changes['columns'];
    const tableData = changes['tableData'];
    if (this.simpleChangeCheck(columns)) {
      this.displayedColumns = this.columns.map(col => col.colName);
    }
    if (this.simpleChangeCheck(tableData)) {
      this.dataSource = new MatTableDataSource(tableData.currentValue);
    }
  }
}