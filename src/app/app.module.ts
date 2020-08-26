import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/Components/header/header.component';
import { FooterComponent } from './Pages/Components/footer/footer.component';
import { GallaryComponent } from './Pages/Components/gallary/gallary.component';
import { ViewRoomsComponent } from './Pages/Components/view-rooms/view-rooms.component';
import { AboutUsComponent } from './Pages/Components/about-us/about-us.component';
import { ContactUsComponent } from './Pages/Components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/Components/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaymentModule } from './Payment/payment.module';
import { BookingModule } from './Reservation-Booking/booking.module';
import { AngularMaterialModule } from './Global-Modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { PayMentService } from 'src/app/Payment/Services/pay-ment.service';
import { Angular4PaystackModule } from 'angular4-paystack';
import { PublicKey } from './Payment/github-ignore-files/publicKey.js';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GallaryComponent,
    ViewRoomsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule, PaymentModule,
    BookingModule,AngularMaterialModule,
    Angular4PaystackModule.forRoot(PublicKey)
  ],
  providers: [PayMentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
