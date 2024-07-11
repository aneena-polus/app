import { Routes } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {   path: '', component: LoginComponent },
    {   path: 'login', component: LoginComponent },
    {   path: 'signup', component: SignupComponent },
    {   path: 'userdashboard', component: UserdashboardComponent },
    {   path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {   path: '**', redirectTo:'/login' }
];
