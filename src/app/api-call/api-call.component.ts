import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  users: any;

  getApiCall = () => {
    this.commonService.sampleApiCall('users?page=1').subscribe((res: any) => {
      this.users = res.data;
      console.log('data response', this.users);
    });
  }

  ngOnInit(): void {
    this.getApiCall()
  }

}
