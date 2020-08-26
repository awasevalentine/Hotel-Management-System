import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayMentService } from 'src/app/Payment/Services/pay-ment.service';

@Component({
  selector: 'app-single-rooms-form',
  templateUrl: './single-rooms-form.component.html',
  styleUrls: ['./single-rooms-form.component.css']
})
export class SingleRoomsFormComponent implements OnInit {
  singleRoom: FormGroup;

  titles: Array<string> = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
  countries: string[] = [ 'Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];


 constructor(private router: Router, private _paystackService: PayMentService) {
   this.singleRoom = new FormGroup({
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

   console.log(`created values on payAtHotel:`, this.singleRoom.value);
   this.router.navigateByUrl('/payAtHotel');

 }

  payNow(){
   var amountInDays;
   const date1 = new Date(this.singleRoom.get('checkInDate').value);
   const date2 = new Date(this.singleRoom.get('checkOutDate').value);
   const daysInMiliseconds = 1000 * 60 * 60 * 24;
   const differenceInTime = date2.getTime() - date1.getTime();
   const daysDifference = differenceInTime / daysInMiliseconds;
   amountInDays = daysDifference;
   console.log(`the differnce in date is: `, amountInDays);

   const details = {
     firstName: this.singleRoom.get('firstName').value,
     lastName: this.singleRoom.get('lastName').value,
     title: this.singleRoom.get('title').value,
     checkInDate: new Date(this.singleRoom.get('checkInDate').value),
     checkOutDate: new Date(this.singleRoom.get('checkOutDate').value),
     phoneNo: this.singleRoom.get('phoneNo').value,
     email: this.singleRoom.get('email').value,
     country: this.singleRoom.get('country').value,
     additionalRequest: this.singleRoom.get('additionalRequest').value,
     amountPaid: 2000 * amountInDays,
     roomType: 'Single',
     daysInHotel: amountInDays

};
   this._paystackService.reservationDetails(details);
   this.router.navigateByUrl('/payNow');

 }

 firstNameErrorMessage(){
   if (this.singleRoom.get('firstName').hasError('required') && this.singleRoom.get('firstName').touched){
     return 'First name is required';
   }

 }

 lastNameErrorMessage(){
   if (this.singleRoom.get('lastName').hasError('required') && this.singleRoom.get('lastName').touched){
     return 'Last name is required';
   }

 }

 checkInDateErrorMessage(){
   if (this.singleRoom.get('checkInDate').hasError('required') && this.singleRoom.get('checkInDate').touched){
     return 'Check-in Date is required';
   }

 }

 checkOutDateErrorMessage(){
   if (this.singleRoom.get('checkOutDate').hasError('required') && this.singleRoom.get('checkOutDate').touched){
     return 'Check-out Date is required';
   }

 }

 emailErrorMessage(){
   if (this.singleRoom.get('email').hasError('required') && this.singleRoom.get('email').touched){
     return 'Email is required';
   }
   if (this.singleRoom.get('email').hasError('email') && this.singleRoom.get('email').touched){
       return 'Email is not valid';
     }

 }

 phoneNoErrorMessage(){
   if (this.singleRoom.get('phoneNo').hasError('required') && this.singleRoom.get('phoneNo').touched){
     return 'Phone Number is required';
   }
   if (this.singleRoom.get('phoneNo').hasError('minLength()') && this.singleRoom.get('phoneNo').touched){
       return 'Phone number is incorrect!';
     }

 }
 countryErrorMessage(){
   if (this.singleRoom.get('country').hasError('required') && this.singleRoom.get('country').touched){
     return 'country name is required';
   }

 }


}

