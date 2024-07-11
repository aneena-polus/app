import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { TicketrequestComponent } from './admin-home/ticketrequest/ticketrequest.component';
import { AdmindashboardComponent } from './admin-home/admindashboard/admindashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [
    TicketrequestComponent,
    AdmindashboardComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
