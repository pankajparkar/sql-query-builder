# SQL Query Builder

## Initial Plan

![](https://raw.githubusercontent.com/pankajparkar/sql-query-builder/master/sql_query_builder_plan.jpg)

Sorry about my handwriting on board, please forgive me 😂😂
Anyways you can look skip to diagram instead of reading the details from picture.

## Core Features

### Supports
- View
- Tables & Join
- Typeahead suggest query inside texture

### Run button to trigger and fetch data

### Support
- Select 
- Join

### Render data dynamically

### Option to view saved query

### Table Support
- Sorting 
- Filtering
- Virtual Scrolling
- Large data
- Show hide column

### Load Time Metrics (Bench Mark)
- Initial Load Time
- Change in Query
- Filtering
- Sorting
- Export (Optional)
- Rendering for more than 100k records
- Scrolling with more than 100k records

---

### Good to have
- remove json formatting (json size reduction)
- Table Export 
- Expand Table (Full screen mode)
- Edited query modal to view data 

---- 

## Entity

```
QueryDetails {
    columns: string[];    
    tables: string[];
    isJoinQuery: string[];    
}

Column {
    col: string;
    sorting: boolean;
    filtering: boolean;
    displayName: string;
    hidden: boolean;
}

Query {
    name: string;
    rawQuery: string;
    queryDetails: QueryDetails
}

TableData {
    queryName: string;
    columns: Column[];
    data: any[];
    query: Query;
}
```

---

## Local Development

### Serve Locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/sql-query-builder` directory.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).