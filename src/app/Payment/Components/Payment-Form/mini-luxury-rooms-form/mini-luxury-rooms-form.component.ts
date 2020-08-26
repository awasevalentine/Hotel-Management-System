import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayMentService } from '../../../Services/pay-ment.service';

@Component({
  selector: 'app-mini-luxury-rooms-form',
  templateUrl: './mini-luxury-rooms-form.component.html',
  styleUrls: ['./mini-luxury-rooms-form.component.css']
})
export class MiniLuxuryRoomsFormComponent implements OnInit {
  miniLuxury: FormGroup;

  titles: Array<string> = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
  countries: string[] = [ 'Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];



 constructor( private router: Router, private _paystackService: PayMentService) {
   this.miniLuxury = new FormGroup({
     checkInDate: new FormControl('', [Validators.required]),
     checkOutDate: new FormControl('', [Validators.required]),
     firstName: new FormControl('', [Validators.required]),
     lastName: new FormControl('', [Validators.required]),
     phoneNo: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
     email: new FormControl('', [Validators.email, Validators.required]),
     country: new FormControl('', [Validators.required]),
     additionalRequest: new FormControl('', [Validators.required]),
     title: new FormControl('', [Validators.required]),


   });
 }

 ngOnInit(): void {
 }

 payAtHotel(){

   console.log(`created values on payAtHotel:`, this.miniLuxury.value);
   this.router.navigateByUrl('/payAtHotel');

 }

 payNow(){
   var amountInDays;
   const date1 = new Date(this.miniLuxury.get('checkInDate').value);
   const date2 = new Date(this.miniLuxury.get('checkOutDate').value);
   const daysInMiliseconds = 1000 * 60 * 60 * 24;
   const differenceInTime = date2.getTime() - date1.getTime();
   const daysDifference = differenceInTime / daysInMiliseconds;
   amountInDays = daysDifference;
   console.log(`the differnce in date is: `, amountInDays);

   const details = {
     firstName: this.miniLuxury.get('firstName').value,
     lastName: this.miniLuxury.get('lastName').value,
     title: this.miniLuxury.get('title').value,
     checkInDate: new Date(this.miniLuxury.get('checkInDate').value),
     checkOutDate: new Date(this.miniLuxury.get('checkOutDate').value),
     phoneNo: this.miniLuxury.get('phoneNo').value,
     email: this.miniLuxury.get('email').value,
     country: this.miniLuxury.get('country').value,
     additionalRequest: this.miniLuxury.get('additionalRequest').value,
     amountPaid: 3000 * amountInDays,
     roomType: 'Mini-luxury',
     daysInHotel: amountInDays

};
   this._paystackService.reservationDetails(details);
   this.router.navigateByUrl('/payNow');

 }

 firstNameErrorMessage(){
   if (this.miniLuxury.get('firstName').hasError('required') && this.miniLuxury.get('firstName').touched){
     return 'First name is required';
   }

 }

 lastNameErrorMessage(){
   if (this.miniLuxury.get('lastName').hasError('required') && this.miniLuxury.get('lastName').touched){
     return 'Last name is required';
   }

 }

 checkInDateErrorMessage(){
   if (this.miniLuxury.get('checkInDate').hasError('required') && this.miniLuxury.get('checkInDate').touched){
     return 'Check-in Date is required';
   }

 }

 checkOutDateErrorMessage(){
   if (this.miniLuxury.get('checkOutDate').hasError('required') && this.miniLuxury.get('checkOutDate').touched){
     return 'Check-out Date is required';
   }

 }

 emailErrorMessage(){
   if (this.miniLuxury.get('email').hasError('required') && this.miniLuxury.get('email').touched){
     return 'Email is required';
   }
   if (this.miniLuxury.get('email').hasError('email') && this.miniLuxury.get('email').touched){
       return 'Email is not valid';
     }

 }

 phoneNoErrorMessage(){
   if (this.miniLuxury.get('phoneNo').hasError('required') && this.miniLuxury.get('phoneNo').touched){
     return 'Phone Number is required';
   }
   if (this.miniLuxury.get('phoneNo').hasError('minLength()') && this.miniLuxury.get('phoneNo').touched){
       return 'Phone number is incorrect!';
     }

 }
 countryErrorMessage(){
   if (this.miniLuxury.get('country').hasError('required') && this.miniLuxury.get('country').touched){
     return 'country name is required';
   }

 }
}
