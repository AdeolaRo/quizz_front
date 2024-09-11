import { Routes } from '@angular/router';
import { PartyComponent } from './pages/party/party.component';
import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [
    // { path: '', component: NavComponent },
    { path: 'party', component: PartyComponent },
];
