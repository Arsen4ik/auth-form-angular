import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/auth/layout/layout.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ResetComponent } from './pages/auth/reset/reset.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        // component: HomeComponent,
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full'
            },
            {
                path: 'sign-in',
                component: SignInComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            },
            {
                path: 'reset',
                component: ResetComponent
            },
            {
                path: '**',
                redirectTo: 'sign-in',
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
