import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/auth/layout/layout.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ResetComponent } from './pages/auth/reset/reset.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        // component: HomeComponent,
        redirectTo: 'profile',
        pathMatch: 'full',
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
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
                component: SignInComponent,

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
