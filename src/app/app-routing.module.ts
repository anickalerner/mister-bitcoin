import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticComponent } from './pages/statistic/statistic.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'contact/edit/:id', component: ContactEditPageComponent },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contacts', component: ContactPageComponent },
  { path: 'stats', component: StatisticComponent },
  { path: 'signup', component: SignupComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
