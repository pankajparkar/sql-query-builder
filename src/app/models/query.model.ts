import { QueryDetails } from "./query-details.model";

export interface SqlQuery {
    name: string;
    rawQuery: string;
    details: QueryDetails;
}
