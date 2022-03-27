import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1, 'name':'Learn Angular', 'description':'Angular is a platform and framework for building single-page client applications ','image':'../../assets/angular.png'}
    ,{'id':2, 'name':'Learn React', 'description':'React is a platform and framework for building single-page client applications ','image':'../../assets/react.png'}
    ,{'id':3, 'name':'Learn NodeJs', 'description':'Nodejs is a platform and framework for building single-page client applications ','image':'../../assets/nodejs.png'}
    ,{'id':4, 'name':'Learn Java', 'description':'Java is a platform and framework for building single-page client applications ','image':'../../assets/java.jpg'}
  
  ]

}
