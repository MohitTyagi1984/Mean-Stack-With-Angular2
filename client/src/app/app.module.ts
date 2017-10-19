import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import { MembersComponent } from './members/members.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MembershipComponent } from './membership/membership.component';
import { DirectoryComponent } from './directory/directory.component';
import { MatrimonialComponent } from './matrimonial/matrimonial.component';
import { ContactusComponent } from './contactus/contactus.component';
import {NavbarComponent} from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { APP_ROUTE_PROVIDER } from './app.route';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   {
   path:  'home',
   component: HomeComponent
 },
 {
   path:  'aboutus',
   component: AboutusComponent
 },
 {
   path:  'membership',
   component: MembershipComponent
 },
 {
   path:  'directory',
   component: DirectoryComponent
 },
 {
   path:  'matrimonial',
   component: MatrimonialComponent
 },
 {
   path:  'contactus',
   component: ContactusComponent
 }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagenotfoundComponent,
    ProductComponent,
     MembersComponent,
     HomeComponent,
     AboutusComponent,
     MembershipComponent,
     DirectoryComponent,
     MatrimonialComponent,
     ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
