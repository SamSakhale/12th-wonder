import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const myData = [{
	"tasks" : [ 
		{
			"text": "Make Test Plan for New Vehicle",
			"isGlobal": true,
			"isLeader": true,
			"creator": "Eoin Morgan",
			"isCompleted": false,
			"start":"2019-09-07",
			"end":"2019-09-10"
		},
		{
			"text": "Make Test Items For New Vehicle",
			"isGlobal": true,
			"isLeader": true,
			"creator": "Eoin Morgan",
			"isCompleted": false,
			"start":"2019-09-07",
			"end":"2019-09-10"
		},
		{
			"text": "Create plan for tire testing",
			"isGlobal": false,
			"isLeader": false,
			"creator": "Mithali Raj",
			"isCompleted": false,
			"start":"2019-09-08",
			"end":"2019-09-10"
		},
		{
			"text": "Ready the engine testing equipment",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Sheldon Cotrell",
			"isCompleted": false,
			"start":"2019-09-12",
			"end":"2019-09-15"
		},
		{
			"text": "Test the seat components",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Ellyse Perry",
			"isCompleted": false,
			"start":"2019-09-13",
			"end":"2019-09-16"
		},
		{
			"text": "Take the car for final examination",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Babar Azam",
			"isCompleted": false,
			"start":"2019-09-12",
			"end":"2019-09-17"
		},
		{
			"text": "Schedule Tests for engine testing",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Heather Knight",
			"isCompleted": false,
			"start":"2019-09-14",
			"end":"2019-09-18"
		},
		{
			"text": "Submit reports to committee",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Trent Boult",
			"isCompleted": false,
			"start":"2019-09-14",
			"end":"2019-09-18"
		}
	]
}];

@Injectable()
export class SharedService {

  constructor() { }

  getData() {
    return of(myData);
  }
}