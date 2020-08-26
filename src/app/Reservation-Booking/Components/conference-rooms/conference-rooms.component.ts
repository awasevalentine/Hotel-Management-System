import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference-rooms',
  templateUrl: './conference-rooms.component.html',
  styleUrls: ['./conference-rooms.component.css']
})
export class ConferenceRoomsComponent implements OnInit {
  public amount = 15000;

  constructor() { }

  ngOnInit(): void {
  }

}
