import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-resistration',
  templateUrl: './resistration.component.html',
  styleUrls: ['./resistration.component.css']
})
export class ResistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  user: User = new User("", "", "", 0,"");
  cp: string = "";

  register() {
    if (this.cp === this.user.password) {
      this.userService.register(this.user).subscribe((data: any) => {
        this.router.navigate['/login'];
        alert("Registration Done Successfully...");
        this.router.navigate(['/login'])
        
      }, err => {
        alert("Some thing went wrong ")
      })
    }
    else {
      alert("Confirm Password is Incorrect")
    }

  }


}
