import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';

import productList from '../../../assets/productList';
import { FormsModule } from '@angular/forms';

import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import{CartHoverDirective}from'../../Directive/cart-hover.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,DatePipe,CurrencyPipe,NgStyle ,CartHoverDirective ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productcarts:Iproduct[]=productList;
  ClientName:string="";
  imgSrc: string = 'https://picsum.photos/200/300';

  img:string="img"
  isBtnDisabled: boolean = false;

  imgClasss: string = 'img-class';
  createdAt=Date.now();

  constructor() {
  
  }
  showImg: boolean = true;

  handeToggle() {
    this.showImg = !this.showImg;
  }
  Buy(product:Iproduct){
    if(product.quantity){
      product.quantity--;
    }
  }
}
