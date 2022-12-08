import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DataService } from '../services/data.service';
import { Persons } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource;

  constructor(
    private httpClients: HttpClient,
    public dialog: MatDialog,
    private service: DataService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.displayedColumns = ['name', 'age', 'score', 'button'];

  }

  fetchData() {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/User.json';
    this.httpClients.get(url).subscribe(
      (user: any) => {
        this.users = user;
        this.dataSource = new MatTableDataSource(this.users);
      });
  }

  applyFilterForUser() {
    let user = this.users.filter((user) => { return (user.age < 21) })
    this.dataSource = new MatTableDataSource(user);
  }

  goToWinner(user: { name: string, age: number, score: number }) {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/Winner.json'
    this.httpClients.post(url, user).subscribe((response) => { console.log(response) })
    console.log(user)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(user: Persons): void {
    this.dialog.open(DialogBoxComponent, {
      width: '500px',
    });
    this.service.setUserVal(user);
  }
}



