import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { user } from '@angular/fire/auth';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

export interface Ipost {
  id?: string,
  name: String,
  age: number,
  score: number,
}

export type Persons = { name: string, age: number, score: number };

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
  ) { }
  users: Persons;
  winner: any;
  setUserVal(user: Persons) {
    this.users = user;
  }

  getUserVal() {
    return this.users;
  }

  // setWinner(winner: any) {
  //   this.winner = winner;
  // }

  // getWinner() {

  //   return this.winner;
  // }

  getWinnerData() {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/Winner.json'
    return this.http.get<{ [id: string]: Ipost }>(url).pipe(map(post => {
      let postData: Ipost[] = [];
      for (let id in post) {
        postData.push({ ...post[id], id })
      }
      return postData;
    }));
    ;



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
