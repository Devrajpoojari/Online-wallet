import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  amount: number;
  id: any = localStorage.getItem('id');
  accountNo: any = localStorage.getItem('accNo')
  balence: any = localStorage.getItem('bal')
  ubalence: number = +this.balence;
  deposite() {
    console.log(this.amount)
    this.userService.deposite(this.amount, this.id).subscribe((data: any) => {
      this.ubalence = this.ubalence + this.amount;
      alert("Amount Deposited successfully")
    }, err => {
      alert("Some thing went wrong")
    })
  }

}
