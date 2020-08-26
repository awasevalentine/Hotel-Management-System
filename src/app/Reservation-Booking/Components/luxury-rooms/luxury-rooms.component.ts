import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxury-rooms',
  templateUrl: './luxury-rooms.component.html',
  styleUrls: ['./luxury-rooms.component.css']
})
export class LuxuryRoomsComponent implements OnInit {
  public amount = 5000;

  constructor() { }

  ngOnInit(): void {
  }

}
