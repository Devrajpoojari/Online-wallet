import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  amount: number = 0;;

  id: any = localStorage.getItem('id');
  accountNo: any = localStorage.getItem('accNo')
  balence: any = localStorage.getItem('bal')
  ubalence: number = +this.balence;

  withdraw() {
    if (this.amount > 100 && this.amount < 100000) {
      this.userService.withdraw(this.amount, this.id).subscribe((data: any) => {
        this.ubalence = this.ubalence - this.amount;
        alert("WithDraw has been done successfully")
      }, err => {
        console.log(err);
      })
    }
    else{
      alert("The withDrow Amount must be in Range 100 to 100000")
    }


  }

}
