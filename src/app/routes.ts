import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { QueryBuilderComponent } from "./components/query-builder/query-builder.component";

export const routes: Routes = [
    { path: 'query-builder', component: QueryBuilderComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'query-builder' },
];
