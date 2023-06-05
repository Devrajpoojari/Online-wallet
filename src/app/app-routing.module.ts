import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositeComponent } from './deposite/deposite.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ResistrationComponent } from './resistration/resistration.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: ResistrationComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'deposite', component: DepositeComponent },
  { path: 'transfer', component: TransferComponent },
  {
    path: 'forget', component: ForgetpassComponent
  }, {
    path: 'userdash', component: UserdashboardComponent
  },
  {
    path: "", component: HomepageComponent
  }, {
    path: 'transaction', component: TransactiondetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
