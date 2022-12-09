import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.css']
})
export class TopperComponent implements OnInit, AfterViewInit {
  constructor(
    private services: DataService,
    private httpClients: HttpClient
  ) { }

  displayedColumns: string[];
  dataSource: any;

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.fetchData()
    this.displayedColumns = ['name', 'age', 'score'];
  }

  user: any;

  fetchData() {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/User.json';
    this.httpClients.get(url).subscribe(
      (user: any) => {
        this.user = user;
        this.applyFilterForTopper();
      });
  }

  applyFilterForTopper() {
    console.log('This is the filter', this.user)
    let user = this.user.filter((data) => { return (data.score > 90) })
    this.dataSource = new MatTableDataSource(user);
  }


}
