import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { IProduct } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // public productsPromise: Promise<Array<IProduct>>;
  // public productsPromotedPromise: Promise<Array<IProduct>>;
  public myInput = new FormControl();
  public select = new FormControl('title');

  public searchValue: string;
  public title = 'devmeetings';
  public options: string[] = [
    'title',
    'price',
  ];

  public sortedBy = 'price';
  public sort: string = 'asc';

  public selectedProp: string = 'title';

  constructor() {
    this.myInput.valueChanges.subscribe(value => {
      this.searchValue = value;
      this.productsFilter = this.getFilteredProducts();
    });

    this.select.valueChanges.subscribe(value => {
      console.log(value)
      this.selectedProp = value;
      this.myInput.setValue('');
      this.productsFilter = this.productList;
    });
  }
  public productList: Array<IProduct> = [
    { title: 'Apple', price: 256.23, promo: true, tags: ['Books'] },
    { title: 'Orange', price: 100, promo: false, },
    { title: 'Banana', price: 100, promo: true, }
  ]
  public productsFilter = this.getFilteredProducts();
  public promtedProducts: Array<IProduct> = this.productList.filter(product => product.promo);

  getFilteredProducts(): IProduct[] {
    if(!this.searchValue) return this.productList;
    return this.productList.filter(p => p[this.selectedProp].toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()))
  }

  public onClick (sortedBy) {
    if(this.sort === 'desc' || this.sortedBy !== sortedBy ) {
      this.sort = 'asc';
    } else {
      this.sort = 'desc';
    }
    this.sortedBy = sortedBy;

    const sortedProducts = this.productsFilter.sort((a, b) => {
      if(a[this.sortedBy] < b[this.sortedBy]) return -1;
      if(a[this.sortedBy] > b[this.sortedBy]) return 1;
      else return 0;
    });
    if(this.sort === 'desc') {
      this.productsFilter = sortedProducts.reverse();
    } else {
      this.productsFilter = sortedProducts;
    }
  }

  public ngOnInit(): void {

  }
  // public ngOnInit (): void {
  //   this.productsPromise = new Promise((resolve) => {
  //       setTimeout(
  //           () => resolve(this.productsFilter),
  //           2000,
  //       );
  //   });
  //   this.productsPromotedPromise = new Promise((resolve) => {
  //     setTimeout(
  //         () => resolve(this.promtedProducts),
  //         1000,
  //     );
  // });
  }

