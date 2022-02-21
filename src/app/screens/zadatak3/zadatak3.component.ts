import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadatak3',
  templateUrl: './zadatak3.component.html',
  styleUrls: ['./zadatak3.component.scss'],
})
export class Zadatak3Component implements OnInit {
  constructor() {}
  randomArray: { id: number; value: number }[] = [];
  id: number = 0;
  ngOnInit(): void {
    // for (let i = 0; i < 5; i++) {
    //   this.randomArray.push(this.generateRandomObject());
    // }
    this.randomArray = [
      { id: 0, value: 4 },
      { id: 1, value: 8 },
      { id: 2, value: 6 },
      { id: 3, value: 9 },
      { id: 4, value: 5 },
      { id: 5, value: 5 },
    ];
  }

  generateRandomObject() {
    let temp = {
      id: this.id,
      value: Math.floor(Math.random() * 10),
    };
    this.id++;
    return temp;
  }

  checkConditions(v: number) {
    var smallerExists: Boolean = false;
    var equalExists: boolean = false;
    this.randomArray.forEach((element) => {
      if (v == element.value) {
        equalExists = true;
      }
      if (element.value < v) {
        smallerExists = true;
      }
    });
    return !smallerExists && !equalExists;
  }
  generate() {
    let value;
    if (this.id < 10) {
      do {
        value = Math.floor(Math.random() * 10);
      } while (this.checkConditions(value));
      this.id++;
      let temp = { id: this.id, value: value };
      alert(value);
      // this.randomArray.push(temp);
    }
  }
}
