import { Component, OnInit } from '@angular/core';
import { SharedService } from '.././shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mytasks: any[];

  constructor(private sharing:SharedService) { }

  ngOnInit() {

  }

  getServiceData() {
    this.sharing.getData().subscribe(data => {
      this.mytasks = data[0].tasks;
    });
  }

}