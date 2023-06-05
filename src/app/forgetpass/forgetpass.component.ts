import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  email: string = "";
  accountNo: number = 0;
  password: string = "";

  forgetPass(){
    this.userService.resetPass(this.email,this.accountNo,this.password).subscribe((data:any)=>{
      alert(data);
      this.router.navigate(['/login']);
    },err=>{
      alert("Some thing went wrong")
    })
  }

}
