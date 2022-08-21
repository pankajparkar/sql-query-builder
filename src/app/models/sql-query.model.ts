import { QueryDetails } from "./query-details.model";

export interface SqlQuery {
    id: string;
    name: string;
    rawQuery: string;
    details: QueryDetails;
}
