import { Component, OnInit, OnChanges } from '@angular/core';
import { SharedService } from '.././shared.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit, OnChanges {
  personalTasks: any[] = [];
  leaderTasks: any[] = [];

  constructor(private sharing:SharedService) { }

  ngOnInit() {
    this.getLogsData();
  }

  ngOnChanges() {
    this.getLogsData();
  }

  getLogsData() {
    this.sharing.getData().subscribe(log => {
      log[0].tasks.forEach(item => {
        if(item.isGlobal === false) {
          console.log(item);
          this.personalTasks.push(item);
        } else if(item.isLeader) {
          this.leaderTasks.push(item);
        }
      });
      // console.log(this.personalTasks);
      // console.log(this.leaderTasks);
    });
  }

}