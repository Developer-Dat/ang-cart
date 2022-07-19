import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: any = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });


  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    console.log('login value', form.value);
    if (form.value.username == 'babai' && form.value.password == 'Admin@1234') {
        let userDetails={
          id:1,
          username:"babai",
          role:"admin",
          email: "babai@yopmail.com"
        }
      this.commonService.setUserDetails(userDetails)
      this.router.navigate(['/dashboard']);
    }
  }

}
