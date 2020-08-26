import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BearerToken } from '../github-ignore-files/bearerToken.js';

@Injectable({
  providedIn: 'root'
})
export class PayMentService {

  verifyApi = 'https://api.paystack.co/transaction/verify';
  baseUrl = 'http://localhost:3000/api'
  public ref;
  public tempDetails = [];
  constructor(private http: HttpClient, private router: Router) { }

  // the getReferenceNo method, gets the generated reference number from the paystack callback function at pay-now.component
  ReferenceNo(ref) {
    this.ref = ref;
  }

  verifyPayment(): Observable<any>{
    this.http.get<any>(`${this.verifyApi}/${this.ref.reference}`, {headers:
      {Authorization: BearerToken}}).subscribe(
        (verifiedData) => {
          const details = this.tempDetails[0];
          if ( verifiedData.data.status === 'success' && verifiedData.data.customer.email === details.email){
            this.http.post(`${this.baseUrl}/luxuryReservation`, details).subscribe(
              (data) => {
              console.log(`Reservations details succeffuly pushed to the DataBase`, data);
            },
            (error) => {
              console.log(`the following error occured trying to push data to DataBase->`, error);
            });
            //this.tempDetails.delete();
        } else {
          console.log(`Payment not approved! failed to create reservation`);
        }

      });
      return;
  }
  reservationDetails(reserveRoom: any){
    this.tempDetails.push(reserveRoom);
  }

  customerReservationData(){
    return this.tempDetails;

  }

}
