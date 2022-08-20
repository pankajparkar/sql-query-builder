import { Routes } from "@angular/router";
import { QueryBuilderComponent } from "./components/query-builder/query-builder.component";

export const routes: Routes = [
    { path: 'query-builder', component: QueryBuilderComponent },
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent) },
    { path: '**', redirectTo: 'query-builder' },
];
