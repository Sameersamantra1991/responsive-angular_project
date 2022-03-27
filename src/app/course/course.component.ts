import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  course = [
    {
      id: 1,
      name: 'Learn Angular',
      description:
        'Angular is a platform and framework for building single-page client applications ',
      image: '../../assets/angular.png',
      source: 'https://www.youtube.com/watch?v=Fg4spR6cdBQ&list=PLp50dWW_m40XTcxIaXVqO60LaIlyHWxDS&ab_channel=ARCTutorials',
    },
    {
      id: 2,
      name: 'Learn React',
      description:
        'React is a platform and framework for building single-page client applications ',
      image: '../../assets/react.png',
      source: 'https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&ab_channel=CodeWithHarry',
    },
    {
      id: 3,
      name: 'Learn NodeJs',
      description:
        'Nodejs is a platform and framework for building single-page client applications ',
      image: '../../assets/nodejs.png',
      source: 'https://www.youtube.com/watch?v=YFmgNiimfyk&list=PLobAq7hWqZWGTfhj4jNQAVzJd_y6iTErQ&ab_channel=CodeWithHarry',
    },
    {
      id: 4,
      name: 'Learn Java',
      description:
        'Java is a platform and framework for building single-page client applications ',
      image: '../../assets/java.jpg',
      source: 'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&ab_channel=CodeWithHarry',
    },
  ];
}
