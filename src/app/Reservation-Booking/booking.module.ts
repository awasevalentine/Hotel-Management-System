import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryRoomsComponent } from './Components/luxury-rooms/luxury-rooms.component';
import { MiniLuxuryRoomsComponent } from './Components/mini-luxury-rooms/mini-luxury-rooms.component';
import { SingleRoomsComponent } from './Components/single-rooms/single-rooms.component';
import { ConferenceRoomsComponent } from './Components/conference-rooms/conference-rooms.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [LuxuryRoomsComponent,
    MiniLuxuryRoomsComponent,
    SingleRoomsComponent,
    ConferenceRoomsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class BookingModule { }
