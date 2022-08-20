import { Query } from "@angular/core";
import { Column } from "./column.model";

export interface TableData {
    queryName: string;
    columns: Column[];
    data: any[];
    query: Query;
}
