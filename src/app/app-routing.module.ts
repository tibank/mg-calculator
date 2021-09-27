import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BanksComponent} from "./banks/banks.component";
import {BankDetailComponent} from "./bank-detail/bank-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/banks', pathMatch: 'full' },
  { path: 'detail/:id', component: BankDetailComponent },
  { path: 'banks', component: BanksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
