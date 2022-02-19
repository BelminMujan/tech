import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  groceryList: Grocery[] = [];
  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.groceryList = this.groceryService.getGroceries();
  }

  removeGrocery(id: number) {
    this.groceryService.removeGrocery(id);
    this.groceryList = this.groceryService.getGroceries();
  }
}
