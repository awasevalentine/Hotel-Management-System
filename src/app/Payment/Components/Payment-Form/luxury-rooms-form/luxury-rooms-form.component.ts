import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayMentService } from 'src/app/Payment/Services/pay-ment.service';

@Component({
  selector: 'app-luxury-rooms-form',
  templateUrl: './luxury-rooms-form.component.html',
  styleUrls: ['./luxury-rooms-form.component.css']
})
export class LuxuryRoomsFormComponent implements OnInit {
  luxForm: FormGroup;

   titles: Array<string> = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
   countries: string[] = [ 'Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];

  constructor(private router: Router, private _paystackService: PayMentService) {
    this.luxForm = new FormGroup({
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

    console.log(`created values on payAtHotel:`, this.luxForm.value);
    this.router.navigateByUrl('/payAtHotel');

  }

  payNow(){
    var amountInDays;
    const date1 = new Date(this.luxForm.get('checkInDate').value);
    const date2 = new Date(this.luxForm.get('checkOutDate').value);
    const daysInMiliseconds = 1000 * 60 * 60 * 24;
    const differenceInTime = date2.getTime() - date1.getTime();
    const daysDifference = differenceInTime / daysInMiliseconds;
    amountInDays = daysDifference;
    console.log(`the differnce in date is: `, amountInDays);

    const details = {
      firstName: this.luxForm.get('firstName').value,
      lastName: this.luxForm.get('lastName').value,
      title: this.luxForm.get('title').value,
      checkInDate: new Date(this.luxForm.get('checkInDate').value),
      checkOutDate: new Date(this.luxForm.get('checkOutDate').value),
      phoneNo: this.luxForm.get('phoneNo').value,
      email: this.luxForm.get('email').value,
      country: this.luxForm.get('country').value,
      additionalRequest: this.luxForm.get('additionalRequest').value,
      amountPaid: 5000 * amountInDays,
      roomType: 'luxury',
      daysInHotel: amountInDays

};
    this._paystackService.reservationDetails(details);
    this.router.navigateByUrl('/payNow');

  }

  firstNameErrorMessage(){
    if (this.luxForm.get('firstName').hasError('required') && this.luxForm.get('firstName').touched){
      return 'First name is required';
    }

  }

  lastNameErrorMessage(){
    if (this.luxForm.get('lastName').hasError('required') && this.luxForm.get('lastName').touched){
      return 'Last name is required';
    }

  }

  checkInDateErrorMessage(){
    if (this.luxForm.get('checkInDate').hasError('required') && this.luxForm.get('checkInDate').touched){
      return 'Check-in Date is required';
    }

  }

  checkOutDateErrorMessage(){
    if (this.luxForm.get('checkOutDate').hasError('required') && this.luxForm.get('checkOutDate').touched){
      return 'Check-out Date is required';
    }

  }

  emailErrorMessage(){
    if (this.luxForm.get('email').hasError('required') && this.luxForm.get('email').touched){
      return 'Email is required';
    }
    if (this.luxForm.get('email').hasError('email') && this.luxForm.get('email').touched){
        return 'Email is not valid';
      }

  }

  phoneNoErrorMessage(){
    if (this.luxForm.get('phoneNo').hasError('required') && this.luxForm.get('phoneNo').touched){
      return 'Phone Number is required';
    }
    if (this.luxForm.get('phoneNo').hasError('minLength()') && this.luxForm.get('phoneNo').touched){
        return 'Phone number is incorrect!';
      }

  }
  countryErrorMessage(){
    if (this.luxForm.get('country').hasError('required') && this.luxForm.get('country').touched){
      return 'country name is required';
    }

  }

}
