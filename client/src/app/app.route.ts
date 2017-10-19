import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
    {   path: '',
        redirectTo: '/navbar',
        pathMatch: 'full'
    },
    {
        path: '/navbar', component: NavbarComponent
    },
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: HomeComponent },
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'home List' }
    },
    // tslint:disable-next-line:eofline
    { path: '**', component: PagenotfoundComponent }];

    export const APP_ROUTE_PROVIDER = [
        provideRoutes(appRoutes)
    ];
