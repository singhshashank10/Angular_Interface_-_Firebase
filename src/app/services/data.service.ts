import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { user } from '@angular/fire/auth';
import { firstValueFrom } from 'rxjs';


export type Persons = { name: string, age: number, score: number };

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
  ) { }
  users: Persons;

  setUserVal(user: Persons) {
    this.users = user;
  }

  getUserVal() {
    return this.users;
  }

  async getWinnerData() {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/Winner.json'
    let response = await firstValueFrom(this.http.get(url));
    let winner = response;
    console.log('services', winner);
    return winner;
    // this.http.get(url).subscribe((response) => {
    //   return response;
    //   console.log('resonce is', response);
    // })

  }

  getTopperData() {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/User.json'
    let userData: any;
    this.http.get(url).subscribe((response) => { userData = response });
    setTimeout(() => console.log("the user data in set timeout", userData), 5000)
    console.log('services user', userData);
    return userData;

  }
}
