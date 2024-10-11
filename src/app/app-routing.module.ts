import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacationRequestsComponent } from './components/vacation-requests/vacation-requests.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
