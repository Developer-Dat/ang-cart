import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface product {
  id: number;
  title: string;
  price: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private productIntoCart = new BehaviorSubject<product[]>([]);
  getProductFromCart$ = this.productIntoCart.asObservable();

  private productIntoCartInstantUpdate = new BehaviorSubject<product[]>([]);
  getProductFromCartInstantUpdate$ = this.productIntoCartInstantUpdate.asObservable();

  private totalPrice = new BehaviorSubject<any>([]);
  getTotalPrice$ = this.totalPrice.asObservable();

  private userAddress = new BehaviorSubject<any>([]);
  getUserAddress$ = this.userAddress.asObservable();

  setProductIntoCart(val: any): void {
    // let product = [...this.productIntoCart.getValue()]
    this.productIntoCart.next(val);
  }

  setProductIntoCartInstantUpdate(val: any): void {
    this.productIntoCartInstantUpdate.next(val);
  }


  setTotalPriceIntoCart(val: any): void {
    this.totalPrice.next(val);
  }

  setUserAddress(data: any): void {
    this.userAddress.next(data);
  }


}
