import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Grocery } from 'src/app/models/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  grocery: any;
  id: any = 0;
  constructor(
    private groceryService: GroceryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.grocery = this.groceryService.getGroceryById(this.id);
  }
  delete = (): void => {
    this.groceryService.removeGrocery(this.id);
    this.router.navigateByUrl('');
  };
  update = (): void => {
    this.groceryService.updateGrocery(this.grocery);
  };
  goBack = (): void => {
    this.router.navigateByUrl('');
  };
}
