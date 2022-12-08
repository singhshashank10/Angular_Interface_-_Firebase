import { Injectable } from '@angular/core';


export type Persons = { name: string, age: number, score: number };

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  users: Persons;

  setUserVal(user: Persons) {
    this.users = user;
  }

  getUserVal() {
    return this.users;
  }
}
