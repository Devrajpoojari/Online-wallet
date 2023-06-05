import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistrationComponent } from './resistration/resistration.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositeComponent } from './deposite/deposite.component';
import { TransferComponent } from './transfer/transfer.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
@NgModule({
  declarations: [
    AppComponent,
    ResistrationComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ContactusComponent,
    HomepageComponent,
    UserdashboardComponent,
    WithdrawComponent,
    DepositeComponent,
    TransferComponent,
    ForgetpassComponent,
    TransactiondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
