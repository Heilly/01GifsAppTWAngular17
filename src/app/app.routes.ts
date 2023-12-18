import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Gifs App',
        loadComponent: () => import('./gifs/pages/layout/layout.component'),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
