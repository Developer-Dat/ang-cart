import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';


const API_URL = 'https://reqres.in';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  private initialData: any = { user: null };
  private userDetails = new BehaviorSubject<any>(this.initialData);
  getUserDetails$ = this.userDetails.asObservable();
  
  // getUserDetails() {
  //   return this.userDetails.asObservable();
  // }

  setUserDetails(val: any): void {
    this.userDetails.next({ user: val });
  }

  sampleApiCall(url:any){
    return this.http.get(API_URL + '/api/' + url).pipe(map(res => res));
  }


}
