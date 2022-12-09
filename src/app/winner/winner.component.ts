import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnInit, Component, ViewChild, DoCheck } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom, map } from 'rxjs';
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
    this.displayedColumns = ['name', 'age', 'score',];
    this.service.getWinnerData().subscribe((data) => {
      this.users = data
      console.log(this.users);
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  ngAfterViewInit() {
    this.pages = this.dataSource.paginator = this.paginator;
  }

  fetchData() {
    this.dataSource = new MatTableDataSource(this.users);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;


}

export interface userData {
  name: string;
  age: number;
  score: number;
}
