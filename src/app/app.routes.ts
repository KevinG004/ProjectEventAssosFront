import { Routes } from '@angular/router';
import { Acceuil } from './Features/acceuil/acceuil';
import { Evenements } from './Features/evenements/evenements';
import { Contact } from './Features/contact/contact';

export const routes: Routes = [
    {
        path: 'accueil',
        component: Acceuil
    },

    {
        path: '',
        redirectTo: "accueil",
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
