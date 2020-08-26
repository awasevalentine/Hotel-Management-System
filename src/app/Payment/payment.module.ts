import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LuxuryRoomsFormComponent } from './Components/Payment-Form/luxury-rooms-form/luxury-rooms-form.component';
import { MiniLuxuryRoomsFormComponent } from './Components/Payment-Form/mini-luxury-rooms-form/mini-luxury-rooms-form.component';
import { SingleRoomsFormComponent } from './Components/Payment-Form/single-rooms-form/single-rooms-form.component';
import { ConferenceRoomsFormComponent } from './Components/Payment-Form/conference-rooms-form/conference-rooms-form.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { PublicKey } from './github-ignore-files/publicKey';
import { PayMentService } from './Services/pay-ment.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../Global-Modules/angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PayNowComponent } from './Components/Pay-Now/pay-now/pay-now.component';
import { PayAtHotelComponent } from './Components/Pay-At-Hotel/pay-at-hotel/pay-at-hotel.component';




@NgModule({
  declarations: [LuxuryRoomsFormComponent,
    PayNowComponent,
    PayAtHotelComponent,
     MiniLuxuryRoomsFormComponent,
     SingleRoomsFormComponent,
     ConferenceRoomsFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    Angular4PaystackModule.forRoot(PublicKey),
    ReactiveFormsModule, FormsModule, AngularMaterialModule
  ],
  providers: [PayMentService]
})
export class PaymentModule { }
