import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'online-wallet';
  id: string = localStorage.getItem('id');
  isLogin: boolean = false;
  notLogin:boolean=true;

  constructor(public dialog: MatDialog) {
  }
  ngOnInit(): void {
  }
  check() {
    if (this.id == null || this.id == "") {
      this.isLogin = false;
      this.notLogin=true;
    }
    else {
      this.isLogin = true;
      this.notLogin=false;
    }
  }

  aboutUs() {
    this.dialog.open(AboutComponent);
  }
  contactus() {
    this.dialog.open(ContactusComponent);
  }
  signout() {
    localStorage.clear();
  }
}
