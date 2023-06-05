import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.css']
})
export class TransactiondetailsComponent implements OnInit {

  constructor(private userService: UserService) { }

  details: any;
  id: any = localStorage.getItem('id');

  ngOnInit(): void {
    this.userService.transactions(this.id).subscribe((data: any) => {
      this.details = data;
      console.log(this.details)
    }, err => {
      alert("Some thing went wrong");
    })
  }

}
