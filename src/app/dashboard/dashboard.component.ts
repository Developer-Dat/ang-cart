import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  subscription: any;
  productArray: any = [
    {
      id: 1,
      title: "Product-1",
      price: 50,
      img: 'https://picsum.photos/id/1015/200/'
    },
    {
      id: 2,
      title: "Product-2",
      price: 40,
      img: 'https://picsum.photos/id/1/200/'
    },
    {
      id: 3,
      title: "Product-3",
      price: 45,
      img: 'https://picsum.photos/id/10/200/'
    },
    {
      id: 4,
      title: "Product-4",
      price: 38,
      img: 'https://picsum.photos/id/100/200/'
    },
    {
      id: 5,
      title: "Product-5",
      price: 54,
      img: 'https://picsum.photos/id/1001/200/'
    },
    {
      id: 6,
      title: "Product-6",
      price: 85,
      img: 'https://picsum.photos/id/1002/200/'
    },
    {
      id: 7,
      title: "Product-7",
      price: 12,
      img: 'https://picsum.photos/id/1003/200/'
    },
    {
      id: 8,
      title: "Product-8",
      price: 55,
      img: 'https://picsum.photos/id/1004/200/'
    },
    {
      id: 9,
      title: "Product-9",
      price: 28,
      img: 'https://picsum.photos/id/1005/200/'
    },
    {
      id: 10,
      title: "Product-10",
      price: 25,
      img: 'https://picsum.photos/id/1006/200/'
    }
  ]
  purchaseProducts: any = []
  purchaseTotal: number = 0

  constructor(private router: Router,private commonService: CommonService, private cartService:CartService) { }

  ngOnInit(): void {
    this.subscription = this.commonService.getUserDetails$.subscribe(
      (res) => {
        console.log('response', res.user && res.user.username ? res.user.username : 'we')
        this.user = res.user ? res.user : null;
      },
      (err) => {
        console.error(`An error occurred: ${err}`);
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectedProductToPurchase(data: any) {
    console.log('purchase product', data)
    this.purchaseProducts.push(data);
    this.purchaseTotal += data.price;
    this.cartService.setProductIntoCartInstantUpdate(this.purchaseProducts)
  }

  gotoNext(){
    this.cartService.setProductIntoCart(this.purchaseProducts);
    this.cartService.setTotalPriceIntoCart(this.purchaseTotal)
    this.router.navigate(['/details']);
  }

}
