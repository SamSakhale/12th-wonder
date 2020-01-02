import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const myData = [{
	"tasks" : [ 
		{
      "id": 1,
			"text": "Make Test Plan for New Vehicle",
			"isGlobal": true,
			"isLeader": true,
			"creator": "Eoin Morgan",
			"isCompleted": false,
			"start":"2019-09-07",
			"end":"2019-09-10"
		},
		{
      "id": 2,
			"text": "Make Test Items For New Vehicle",
			"isGlobal": true,
			"isLeader": true,
			"creator": "Eoin Morgan",
			"isCompleted": false,
			"start":"2019-09-07",
			"end":"2019-09-10"
		},
		{
      "id": 3,
			"text": "Create plan for tire testing",
			"isGlobal": false,
			"isLeader": false,
			"creator": "Mithali Raj",
			"isCompleted": false,
			"start":"2019-09-08",
			"end":"2019-09-10"
		},
		{
      "id": 4,
			"text": "Ready the engine testing equipment",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Sheldon Cotrell",
			"isCompleted": false,
			"start":"2019-09-12",
			"end":"2019-09-15"
		},
		{
      "id": 5,
			"text": "Test the seat components",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Ellyse Perry",
			"isCompleted": false,
			"start":"2019-09-13",
			"end":"2019-09-16"
		},
		{
      "id": 6,
			"text": "Take the car for final examination",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Babar Azam",
			"isCompleted": false,
			"start":"2019-09-12",
			"end":"2019-09-17"
		},
		{
      "id": 7,
			"text": "Schedule Tests for engine testing",
			"isGlobal": true,
			"isLeader": false,
			"creator": "Heather Knight",
			"isCompleted": false,
			"start":"2019-09-14",
			"end":"2019-09-18"
		},
		{
      "id": 8,
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

  putData(jsonObjData) {
    myData[0].tasks.push({
      id: myData[0].tasks.length + 1,
      text: jsonObjData.text,
      creator: jsonObjData.creator,
      isGlobal: jsonObjData.global,
      isLeader: jsonObjData.leader,
      isCompleted: jsonObjData.completed,
      start: jsonObjData.start,
      end: jsonObjData.end
    })
  }

  updateMyData(val, id) {
    myData[0].tasks[id - 1].isCompleted = val;
  }
}