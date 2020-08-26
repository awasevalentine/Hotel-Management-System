import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-rooms',
  templateUrl: './single-rooms.component.html',
  styleUrls: ['./single-rooms.component.css']
})
export class SingleRoomsComponent implements OnInit {
  public amount = 2000;

  constructor() { }

  ngOnInit(): void {
  }

}
