import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  amount: number = 0;
  sender: number = 0;
  rnumber: number = 0;

  id: any = localStorage.getItem('id');
  accountNo: any = localStorage.getItem('accNo')
  balence: any = localStorage.getItem('bal')
  ubalence: number = +this.balence;

  transfer() {
    this.userService.transfer(this.accountNo, this.rnumber, this.amount).subscribe((data: any) => {
      this.ubalence=this.ubalence-this.amount;
      alert(data);
    }, err => {
      alert("Someting went Wrong")
    })
  }


}
