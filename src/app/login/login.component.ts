import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  email: string = "";
  password: string = "";

  login() {
    this.userService.login(this.email, this.password).subscribe((data: any) => {
      localStorage.setItem('id', data.userId);
      localStorage.setItem("bal",data.balence);
      localStorage.setItem('accNo',data.accountNumber);
      this.router.navigate(['/', 'userdash']);;
    }, err => {
      alert(err.error.message);
    })
  }

}
