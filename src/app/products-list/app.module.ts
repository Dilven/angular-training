import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductComponent } from '../product/product.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductsListComponent]
})
export class AppModule { }
