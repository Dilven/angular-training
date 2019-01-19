import { Component, OnInit, Input } from '@angular/core';

export interface IProduct {
  title: string;
  price: number;
  promo: boolean;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  @Input() public productsList: IProduct[];

  ngOnInit() {
  }

}
