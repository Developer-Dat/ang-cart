import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private initialData: any = { user: null };
  private userDetails = new BehaviorSubject<any>(this.initialData);
  getUserDetails$ = this.userDetails.asObservable();
  
  // getUserDetails() {
  //   return this.userDetails.asObservable();
  // }

  setUserDetails(val: any): void {
    this.userDetails.next({ user: val });
  }


}
