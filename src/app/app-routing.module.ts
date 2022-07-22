import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCallComponent } from './api-call/api-call.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetDetailsComponent } from './get-details/get-details.component';
import { LoginComponent } from './login/login.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { Mat1TableComponent } from './mat1-table/mat1-table.component';
import { Mat2TableComponent } from './mat2-table/mat2-table.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', component: GetDetailsComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'mattable', component: MatTableComponent },
  { path: 'mat1table', component: Mat1TableComponent },
  { path: 'mat2table', component: Mat2TableComponent },
  { path: 'api-call', component: ApiCallComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
