import { ColDef } from "ag-grid-community";
import { Column } from "src/app/models/column.model";
import { isJson } from "./object.utils";

export function convertColumns(columns: Column[]): ColDef[] {
    return columns.map(
        col => ({
            headerName: col.displayName,
            field: col.colName,
            sortable: true,
            filter: true,
            flex: 1,
            valueFormatter: col.isJson ? (d) => d.value && JSON.stringify(d.value) : undefined,
        })
    );
}

export function createColumns(firstRow: any): Column[] {
    return Object.keys(firstRow).map(
        (col) => ({
            colName: col,
            displayName: col,
            filtering: false,
            hidden: false,
            sorting: false,
            isJson: isJson(firstRow[col])
        })
    );
}

