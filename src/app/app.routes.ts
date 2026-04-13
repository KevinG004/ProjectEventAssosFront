import { Routes } from '@angular/router';
import { Acceuil } from './Features/accueil/accueil';
import { Evenements } from './Features/evenements/evenements';
import { Contact } from './Features/contact/contact';
import { Register } from './Features/register/register';
import { Login } from './Features/login/login';
import { RegisterAdmin } from './Features/register-admin/register-admin';
import { CreateEvent } from './Features/create-event/create-event';

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
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    },
    {
        path : 'registerAdmin',
        component: RegisterAdmin
    },
    {
        path : 'createEvent',
        component: CreateEvent
    }
];
