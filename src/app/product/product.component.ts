import { Component, OnInit, Input } from '@angular/core';

export interface IProduct {
  title: string;
  price: number;
  promo: boolean;
  tags?: string[];
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() public product: IProduct;

  getTags(): string[] {
    return this.product.tags || [];
  }
  ngOnInit() {
  }

}
