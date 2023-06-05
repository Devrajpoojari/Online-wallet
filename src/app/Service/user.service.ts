import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:8081/api/";

  register(user: User) {
    return this.http.post(this.url + "register", user);
  }
  login(email: string, password: string) {
    return this.http.get(this.url + 'login/' + email + "/" + password, { responseType: 'json' });
  }
  resetPass(email: string, accountNumber: number, newPass: string) {
    return this.http.get(this.url + "reset/" + email + "/" + accountNumber + "/" + newPass, { responseType: 'text' });
  }
  deposite(amount: number, id: number) {
    return this.http.get(this.url + "deposite/" + amount + "/" + id);
  }
  transfer(senderAccountNumber: string, recieverAccountNumber: number, amount: number) {
    return this.http.get(this.url + 'transfer/' + senderAccountNumber + "/" + recieverAccountNumber + "/" + amount, { responseType: 'text' });
  }
  withdraw(amount: any, id: any) {
    return this.http.get(this.url + 'withdraw/' + amount + "/" + id)
  }
  transactions(id: any) {
    return this.http.get(this.url + 'all/' + id);
  }
}
