import { Component, OnInit, OnChanges } from '@angular/core';
import { SharedService } from '.././shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  mytasks: any[];

  ftext = "";
  fcreator = "";
  fglobal = false;
  fleader = false;
  fcompleted = false;
  fstart = "";
  fend = "";

  constructor(private sharing:SharedService) { }

  ngOnInit() {
    this.getServiceData();
  }

  ngOnChanges() {
    this.getServiceData();
  }

  getServiceData() {
    this.sharing.getData().subscribe(data => {
      this.mytasks = data[0].tasks;
    });
  }

  changeRowVal(event, id) {
    console.log(event.target.checked);
    console.log(id);
    this.sharing.updateMyData(event.target.checked, id);
  }

  submitFormData() {
    let tempArr = {
      text: this.ftext,
      creator: this.fcreator,
      global: this.fglobal,
      leader: this.fleader,
      completed: this.fcompleted,
      start: this.fstart,
      end: this.fend
    }

    this.sharing.putData(tempArr);
  }

}