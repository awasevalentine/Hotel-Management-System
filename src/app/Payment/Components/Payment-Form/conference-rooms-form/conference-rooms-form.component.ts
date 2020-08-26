import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayMentService } from '../../../Services/pay-ment.service';

@Component({
  selector: 'app-conference-rooms-form',
  templateUrl: './conference-rooms-form.component.html',
  styleUrls: ['./conference-rooms-form.component.css']
})
export class ConferenceRoomsFormComponent implements OnInit {
  conference: FormGroup;

   titles: Array<string> = ['Mr', 'Mrs', 'Miss', 'Dr', 'Engr', 'Prof', 'Pst', 'Rev'];
   countries: string[] = [ 'Nigeria', 'Ghana', 'Cameroon', 'Guinea', 'Morocco', 'Togo', 'benni Republic', 'Niger', 'Egypt', 'Madagascar'];

  constructor(private router: Router, private _paystackService: PayMentService) {
    this.conference = new FormGroup({
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

    console.log(`created values on payAtHotel:`, this.conference.value);
    this.router.navigateByUrl('/payAtHotel');

  }

  payNow(){
    var amountInDays;
    const date1 = new Date(this.conference.get('checkInDate').value);
    const date2 = new Date(this.conference.get('checkOutDate').value);
    const daysInMiliseconds = 1000 * 60 * 60 * 24;
    const differenceInTime = date2.getTime() - date1.getTime();
    const daysDifference = differenceInTime / daysInMiliseconds;
    amountInDays = daysDifference;
    console.log(`the differnce in date is: `, amountInDays);

    const details = {
      firstName: this.conference.get('firstName').value,
      lastName: this.conference.get('lastName').value,
      title: this.conference.get('title').value,
      checkInDate: new Date(this.conference.get('checkInDate').value),
      checkOutDate: new Date(this.conference.get('checkOutDate').value),
      phoneNo: this.conference.get('phoneNo').value,
      email: this.conference.get('email').value,
      country: this.conference.get('country').value,
      additionalRequest: this.conference.get('additionalRequest').value,
      amountPaid: 15000 * amountInDays,
      roomType: 'conference Room',
      daysInHotel: amountInDays

};
    this._paystackService.reservationDetails(details);
    this.router.navigateByUrl('/payNow');

  }

  firstNameErrorMessage(){
    if (this.conference.get('firstName').hasError('required') && this.conference.get('firstName').touched){
      return 'First name is required';
    }

  }

  lastNameErrorMessage(){
    if (this.conference.get('lastName').hasError('required') && this.conference.get('lastName').touched){
      return 'Last name is required';
    }

  }

  checkInDateErrorMessage(){
    if (this.conference.get('checkInDate').hasError('required') && this.conference.get('checkInDate').touched){
      return 'Check-in Date is required';
    }

  }

  checkOutDateErrorMessage(){
    if (this.conference.get('checkOutDate').hasError('required') && this.conference.get('checkOutDate').touched){
      return 'Check-out Date is required';
    }

  }

  emailErrorMessage(){
    if (this.conference.get('email').hasError('required') && this.conference.get('email').touched){
      return 'Email is required';
    }
    if (this.conference.get('email').hasError('email') && this.conference.get('email').touched){
        return 'Email is not valid';
      }

  }

  phoneNoErrorMessage(){
    if (this.conference.get('phoneNo').hasError('required') && this.conference.get('phoneNo').touched){
      return 'Phone Number is required';
    }
    if (this.conference.get('phoneNo').hasError('minLength()') && this.conference.get('phoneNo').touched){
        return 'Phone number is incorrect!';
      }

  }
  countryErrorMessage(){
    if (this.conference.get('country').hasError('required') && this.conference.get('country').touched){
      return 'country name is required';
    }

  }

}
