import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  myForm: any = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    pin: new FormControl(''),
    state: new FormControl(''),

  });
  constructor(private router: Router,private cartService:CartService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    console.log('user details form', form.value);
    this.cartService.setUserAddress(form.value)
    this.router.navigate(['/purchase']);
  }
}
