import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-luxury-rooms',
  templateUrl: './mini-luxury-rooms.component.html',
  styleUrls: ['./mini-luxury-rooms.component.css']
})
export class MiniLuxuryRoomsComponent implements OnInit {
  public amount = 3000;

  constructor() { }

  ngOnInit(): void {
  }

}
