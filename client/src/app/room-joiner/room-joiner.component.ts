import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-joiner',
  templateUrl: './room-joiner.component.html',
  styleUrls: ['./room-joiner.component.scss']
})
export class RoomJoinerComponent implements OnInit {
  private room: string;

  constructor(
    private controller: ControllerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  joinRoom(){
    this.controller.setRoom(this.room);
    this.controller.sendCommand("next");
    this.router.navigate(['/names']);
  }

}
