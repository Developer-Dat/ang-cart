import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  totalSubscription: any;
  productSubscription: any;
  addressSubscription: any;
  subTotal: number = 0;
  deliveryAddress: any;
  purchasedProducts: any;
  constructor(private router: Router,private cartService: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.totalSubscription = this.cartService.getTotalPrice$.subscribe(
      (res) => {
        console.log('total', res)
        this.subTotal = res;
      },
      (err) => {
        console.error(`An error occurred: ${err}`);
      }
    )

    this.productSubscription = this.cartService.getProductFromCart$.subscribe(
      (res) => {
        console.log('product', res)
        this.purchasedProducts = res;

      },
      (err) => {
        console.error(`An error occurred: ${err}`);
      }
    )

    this.addressSubscription = this.cartService.getUserAddress$.subscribe(
      (res) => {
        console.log('address', res)
        this.deliveryAddress = res;
      },
      (err) => {
        console.error(`An error occurred: ${err}`);
      }
    )

  }

  ngOnDestroy(): void {
    this.totalSubscription.unsubscribe();
    this.productSubscription.unsubscribe();
    this.addressSubscription.unsubscribe();
  }

  confirmPurchase() {
    console.log('confirm modal open')


    const dialogData = {
      title: "Confirm",
      message: "Are you sure you want to do this?"
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
    
     if(dialogResult){
      console.log('dialogResult proceed to api call',dialogResult)
      this.router.navigate(['/dashboard']);
     }
     else{
      //do nothing
     }
    });

  }

}
