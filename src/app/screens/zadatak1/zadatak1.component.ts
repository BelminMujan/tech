import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zadatak1',
  templateUrl: './zadatak1.component.html',
  styleUrls: ['./zadatak1.component.scss'],
})
export class Zadatak1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  osoba = {
    ime: 'Belmin',
    prezime: 'Mujan',
    role: 'Developer',
    obrazovanje: {
      osnovnaSkola: 'Cetvrta osnovna skola',
      srednjaSkola: 'Cetvrta Gimnazija',
      fakultet: 'Fakultet Informacijskih Tehnologija',
    },
    datumRodjenja: new Date(1998, 12, 9),
  };
  laptop = {
    brand: 'HP',
    model: {
      modelName: 'Elitebook',
      modelNumber: 'g5 850',
    },
    specs: {
      cpu: {
        cores: {
          cores: 4,
          threads: 8,
        },
        generation: 8,
        group: 'i5',
        model: '8250u',
      },
      ram: {
        model: 'ddr4',
        amount: '16gb',
        sticks: 1,
        sticksAvailable: 1,
      },
      storage: {
        type: 'nvme',
        capacity: '511gb',
      },
    },
  };
  result: any = '';
  path: string = '';
  createArray(result: any) {
    var temp: string[] = [];

    Object.keys(result).forEach((i) => {
      if (typeof result[i] === 'object') {
        var t = this.createArray(result[i]);
        temp.push(`${i} : ${t}`);
      } else {
        temp.push(`${i} : ${result[i]}`);
      }
    });
    return temp;
  }
  lookup(obj: any, path: string) {
    this.result = '';
    var paths = path.split('.');
    var result = obj;
    var i;
    if (path !== '')
      for (i = 0; i < paths.length; ++i) {
        if (result[paths[i]]) {
          result = result[paths[i]];
        } else {
          result = 'Invalid path';
        }
      }

    if (typeof result === 'object' || path === '') {
      this.result = this.createArray(result);
    } else {
      let temp: string[] = [];
      temp.push(result);
      this.result = temp;
    }
    return result;
  }
}
