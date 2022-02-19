import { Component, Input, OnInit } from '@angular/core';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() close!: () => void;
  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {}

  grocery = {
    id: new Date().getTime(),
    name: '',
    quantity: 0,
    addedBy: '',
    whereToBuy: '',
  };
  addItem = (): void => {
    this.groceryService.addGrocery(this.grocery);
    this.close();
  };
}
