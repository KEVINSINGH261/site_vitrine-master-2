import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { AProposComponent } from './components/a-propos/a-propos.component';

//permet de définir les routes de l'application
export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'apropos', component: AProposComponent }
];

export default routes;
