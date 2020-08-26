import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuxuryRoomsComponent } from './Reservation-Booking/Components/luxury-rooms/luxury-rooms.component';
import { MiniLuxuryRoomsComponent } from './Reservation-Booking/Components/mini-luxury-rooms/mini-luxury-rooms.component';
import { SingleRoomsComponent } from './Reservation-Booking/Components/single-rooms/single-rooms.component';
import { ConferenceRoomsComponent } from './Reservation-Booking/Components/conference-rooms/conference-rooms.component';
import { ConferenceRoomsFormComponent } from './Payment/Components/Payment-Form/conference-rooms-form/conference-rooms-form.component';
import { SingleRoomsFormComponent } from './Payment/Components/Payment-Form/single-rooms-form/single-rooms-form.component';
import { LuxuryRoomsFormComponent } from './Payment/Components/Payment-Form/luxury-rooms-form/luxury-rooms-form.component';
import { MiniLuxuryRoomsFormComponent } from './Payment/Components/Payment-Form/mini-luxury-rooms-form/mini-luxury-rooms-form.component';
import { PayNowComponent } from './Payment/Components/Pay-Now/pay-now/pay-now.component';
import { PayAtHotelComponent } from './Payment/Components/Pay-At-Hotel/pay-at-hotel/pay-at-hotel.component';
import { ViewRoomsComponent } from './Pages/Components/view-rooms/view-rooms.component';
import { GallaryComponent } from './Pages/Components/gallary/gallary.component';
import { ContactUsComponent } from './Pages/Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Pages/Components/about-us/about-us.component';
import { HomeComponent } from './Pages/Components/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'luxury', component: LuxuryRoomsComponent
  },
  {
    path: 'miniLuxury', component: MiniLuxuryRoomsComponent
  },
  {
    path: 'singleRoom', component: SingleRoomsComponent
  },
  {
    path: 'conferenceRoom', component: ConferenceRoomsComponent
  },
  {
    path: 'conferencePayment', component: ConferenceRoomsFormComponent
  },
  {
    path: 'singlePayment', component: SingleRoomsFormComponent
  },
  {
    path: 'luxuryPayment', component: LuxuryRoomsFormComponent
  },
  {
    path: 'miniLuxuryPayment', component: MiniLuxuryRoomsFormComponent
  },
  {
    path: 'payNow', component: PayNowComponent
  },
  {
    path: 'payAtHotel', component: PayAtHotelComponent
  },
  {
    path: 'rooms', component: ViewRoomsComponent
  },
  {
    path: 'gallary', component: GallaryComponent
  },
  {
    path: 'contactUs', component: ContactUsComponent
  },
  {
    path: 'aboutUs', component: AboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

