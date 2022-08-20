import { QueryDetails } from "./query-details.model";

export interface Query {
    rawQuery: string;
    details: QueryDetails;
}
