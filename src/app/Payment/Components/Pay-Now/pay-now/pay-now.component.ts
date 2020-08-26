import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PayMentService } from '../../../Services/pay-ment.service';

@Component({
  selector: 'app-pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.css']
})
export class PayNowComponent implements OnInit {
  @ViewChild('paymentSuccessModelTemplate') paymentSuccessModelTemplate: TemplateRef<any>;
  paymentSuccessModal: MatDialogRef<any>;
  public reservationDetails = [];
  tRef = '';
  title = '';

  constructor(private http: HttpClient,
              private router: Router,
              private _paystackService: PayMentService,
              private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.reservationDetails = this._paystackService.customerReservationData();

    this.setRandomPaymentRef();
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any): Observable<any>{
    this.title = 'Payment successfull';
    this._paystackService.ReferenceNo(ref); // these pushes the generate refernce to the paystack service class for consumption
    this._paystackService.verifyPayment();
    this.showPaymentSuccessDialog(); // successful booking modal call;
    // this.router.navigateByUrl('/');
    console.log(`my response`, this.title, ref);
    return;
  }

  paymentCancel() {
    this.title = 'Payment failed';

    console.log(this.title);
  }

  setRandomPaymentRef() {
    this.tRef = `${Math.random() * 10000000000000}`;

  }

  showPaymentSuccessDialog() {
    this.paymentSuccessModal = this._dialog.open(this.paymentSuccessModelTemplate, {
       disableClose: true,
       width: '330px',
       height: '330px',

    });
    this.router.navigateByUrl('/');
}

}
