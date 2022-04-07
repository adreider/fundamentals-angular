import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  show: boolean = true;

  nameButton: string = "nao exibir";

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    if(this.show === true) {
      this.show = !this.show; // toggle
      this.nameButton = "exibir";
    } else {
      this.show = !this.show; // toggle
      this.nameButton = "não exibir";
    }
  }
}

