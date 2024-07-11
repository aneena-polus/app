import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketrequestComponent } from './admin-home/ticketrequest/ticketrequest.component';
import { AdmindashboardComponent } from './admin-home/admindashboard/admindashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'adminhome', pathMatch: 'full' },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'ticketrequest', component: TicketrequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
