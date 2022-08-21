import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'query', children: [
            {
                path: 'list',
                loadComponent: () => import('./components/query-list/query-list.component')
                    .then(c => c.QueryListComponent),
            },
            {
                path: ':id',
                loadComponent: () => import('./components/query-edit/query-edit.component')
                    .then(c => c.QueryEditComponent),
            },
            { path: '**', redirectTo: 'list' },
        ]
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component')
            .then(c => c.AboutComponent),
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    },
];
