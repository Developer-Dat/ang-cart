import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CommonService } from './common.service';
import { CartService } from './cart.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { Mat1TableComponent } from './mat1-table/mat1-table.component';
import { Mat2TableComponent } from './mat2-table/mat2-table.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GetDetailsComponent,
    PurchaseComponent,
    ProductComponent,
    UserDetailsComponent,
    ConfirmDialogComponent,
    MatTableComponent,
    Mat1TableComponent,
    Mat2TableComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CommonService,CartService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
