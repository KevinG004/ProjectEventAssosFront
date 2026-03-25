import { Routes } from '@angular/router';
import { Acceuil } from './Features/acceuil/acceuil';
import { Evenements } from './Features/evenements/evenements';
import { Contact } from './Features/contact/contact';

export const routes: Routes = [
    {
        path: 'acceuil',
        component: Acceuil
    },

    {
        path: '',
        redirectTo: "acceuil",
        pathMatch: 'full'
    },

    {
        path: 'evenements',
        component: Evenements
    },

    {
        path: 'contact',
        component: Contact
    }
];
