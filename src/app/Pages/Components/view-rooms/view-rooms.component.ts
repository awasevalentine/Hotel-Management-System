import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {

  public luxuryRoomAmount = 5000;
  public miniLuxuryRoomAmount = 3000;
  public singleRoomAmount = 2000;
  public conferenceRoomAmount = 15000;


  constructor() { }

  ngOnInit(): void {
  }

}
