import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    private services: DataService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  sendVal() {
    let val = this.services.getUserVal();
    let url = 'https://angular-interface-default-rtdb.firebaseio.com/Winner.json'
    this.http.post(url, val).subscribe((response) => { console.log(response) })
    console.log(val)
  }

}
