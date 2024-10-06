import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'detail/:peopleId', component: DetailComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full'}
];
