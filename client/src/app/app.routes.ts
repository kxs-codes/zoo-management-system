import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Enclosure } from './pages/enclosure/enclosure';
import { Staff } from './pages/staff/staff';

export const routes: Routes = [

    
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'enclosure',
        component: Enclosure,
    },
    {
        path: 'staff',
        component: Staff
    }
];
