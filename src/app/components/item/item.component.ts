import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() id!: number;
  constructor() {}

  ngOnInit(): void {}
}
