import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productSubscriptionInstantUpdate: any;
  purchasedProductsInstantUpdate: any;

  @Input() product: any = {}
  @Input() purchaseProducts: any = []
  @Output() productPurchaseEventEmitter = new EventEmitter<any>();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.productSubscriptionInstantUpdate = this.cartService.getProductFromCartInstantUpdate$.subscribe(
      (res) => {
        console.log('product', res)
        this.purchasedProductsInstantUpdate = res;
      },
      (err) => {
        console.error(`An error occurred: ${err}`);
      }
    )

  }

  onProductPurchase(product: any) {
    this.productPurchaseEventEmitter.emit(product);
  }

  ngOnDestroy(): void {
    this.productSubscriptionInstantUpdate.unsubscribe();
  }


  isAlreadyBuyOrNot() {
    let isExist = this.purchasedProductsInstantUpdate.filter((x: any) => x.id == this.product.id)

    if (isExist.length) {
      return false
    }
    else {
      return true
    }

  }

}
