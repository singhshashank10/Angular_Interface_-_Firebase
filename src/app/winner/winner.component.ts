import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnInit, Component, ViewChild, DoCheck } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']

})
export class WinnerComponent implements OnInit, AfterViewInit {

  users: any;
  dataSource = new MatTableDataSource;
  displayedColumns: string[]
  pages: any;

  constructor(
    private service: DataService,
    private httpClients: HttpClient,
  ) { }

  ngOnInit(): void {
    // this.service.getWinnerData().subscribe((response) => { this.users = response });
    // console.log('here', this.users?.__zone_symbol__value);
    this.fetchData();
    this.displayedColumns = ['name', 'age', 'score',];
  }

  ngAfterViewInit() {
    this.pages = this.dataSource.paginator = this.paginator;
  }

  fetchData() {
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/Winner.json';
    this.httpClients.get(url).subscribe(
      (user: any) => {
        this.users = user;
        this.dataSource = new MatTableDataSource(user);
        console.log('Winner', user)
      });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;


}

export interface userData {
  name: string;
  age: number;
  score: number;
}
