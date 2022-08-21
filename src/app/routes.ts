import { Routes } from "@angular/router";
import { QueryEditComponent } from "./components/query-edit/query-edit.component";
import { QueryListComponent } from "./components/query-list/query-list.component";

export const routes: Routes = [
    {
        path: 'query-builder', children: [
            { path: 'list', component: QueryListComponent },
            { path: ':id', component: QueryEditComponent },
            { path: '**', redirectTo: 'new' },
        ]
    },
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent) },
    { path: '**', redirectTo: 'query-builder' },
];
