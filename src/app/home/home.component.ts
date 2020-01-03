import { Component, OnInit, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
import { SharedService } from '.././shared.service';
import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface UserData {
  id: number;
  text: string;
  creator: string;
  isCompleted: boolean;
  start: string;
  end: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, AfterViewInit {
  mytasks: any[];

  ftext = "";
  fcreator = "";
  fglobal = false;
  fleader = false;
  fcompleted = false;
  fstart = "";
  fend = "";

  displayedColumns: string[] = ['id', 'text', 'creator', 'isCompleted', 'start', 'end'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private sharing:SharedService) { }

  ngOnInit() {
    this.getServiceData();
  }

  ngOnChanges() {
    this.getServiceData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    const tableFilters = [];
    tableFilters.push({
      id: 'text',
      value: filterValue
    });


    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getServiceData() {
    this.sharing.getData().subscribe(data => {
      this.mytasks = data[0].tasks;
      this.dataSource = new MatTableDataSource(this.mytasks);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 2000);

      this.dataSource.filterPredicate = 
  (data: UserData, filtersJson: string) => {
      const matchFilter = [];
      const filters = JSON.parse(filtersJson);

      filters.forEach(filter => {
        const val = data[filter.id] === null ? '' : data[filter.id];
        matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
      });
        return matchFilter.every(Boolean);
    };
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

    this.getServiceData();
  }

}