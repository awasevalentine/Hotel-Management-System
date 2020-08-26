import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roomTypes: string[] = ['Luxury', 'Mini-luxury', 'Single', 'Conference'];

  bookNow = {
    roomType: '',

  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  booking() {
    switch (this.bookNow.roomType) {
       case 'Luxury':
       return this.router.navigateByUrl('/luxury');
       case 'Mini-luxury':
       return this.router.navigateByUrl('/miniLuxury');
       case 'Single':
       return this.router.navigateByUrl('/singleRoom');
       case 'Conference':
       return this.router.navigateByUrl('/conferenceRoom');
    }
   }

}
