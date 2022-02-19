import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private groceryList: Grocery[] = [
    {
      id: 0,
      name: 'Kruska',
      quantity: 2,
      addedBy: 'Belmin Mujan',
      whereToBuy: 'Bingo',
    },
  ];
  getGroceries() {
    return this.groceryList;
  }
  getGroceryById(id: number) {
    return this.groceryList.find((x) => x.id == id);
  }
  addGrocery(grocery: Grocery) {
    this.groceryList.push(grocery);
  }
  removeGrocery(id: number) {
    this.groceryList = this.groceryList.filter((x) => x.id != id);
  }
  updateGrocery(grocery: Grocery) {
    const index = this.groceryList.findIndex((x) => x.id == grocery.id);
    if (index != null && index != undefined) {
      this.groceryList[index] = grocery;
    }
  }
  constructor() {}
}
