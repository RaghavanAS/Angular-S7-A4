import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
// declaring Student list array
  studentList: Student[];
// initializing the studentlist array in constructor
  constructor() {
    this.studentList = [
      {
        name: 'Raghavan',
        roll_number: 1261,
        age: 18,
        gender: 'male  ',
        isDayScholar: true
      },
      {
        name: 'Karthik ',
        roll_number: 1262,
        age: 19,
        gender: 'male  ',
        isDayScholar: true
    },
      {
        name: 'Priyanka',
        roll_number: 1263,
        age: 19,
        gender: 'female',
        isDayScholar: false
    },
      {
        name: 'Sabah   ',
        roll_number: 1264,
        age: 18,
        gender: 'female',
        isDayScholar: false
    }
    ];
   }

  ngOnInit() {
}
}
