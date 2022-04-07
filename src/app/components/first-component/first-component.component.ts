import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Adriano Lino";
  age: number = 21;
  job = "Programador";
  hobbies: string[] = ['code', 'english', 'valorant'];
  car = {
    name: 'hb20',
    year: '2018',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
