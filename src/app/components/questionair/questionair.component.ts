import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-questionair',
  templateUrl: './questionair.component.html',
  styleUrls: ['./questionair.component.css']
})
export class QuestionairComponent implements OnInit {
  favoriteSeason: string;


  questions = [
    { name: 'What is Your Favorite Season?' }, { q: ['Winter', 'Spring', 'Summer', 'Autumn'] },
    // tslint:disable-next-line:max-line-length
    { name: 'What\'s your texting style?' }, { q: [' Emoji city', 'IDK I rarely text', 'I\'m an over-texter', ' Short'] },
    { name: 'My Ideal Workspace Is...' }, { q: ['Wherever The Work Takes Me', 'An Art Studio', 'An Office', 'Anywhere I can get Wifi'] },
    // tslint:disable-next-line:max-line-length
    { name: 'Which Words Best Describe You?' }, { q: ['Classic and Refined', 'Reliable and Easy Going', 'Modern and Stylish', 'Glittering and Charming'] },
    { name: 'What\'s Your Favorite Dessert' }, { q: ['Ice Cream', 'Cake', 'Creme Brulee', ' Peach Pie'] },
  ];

  constructor() { }

  ngOnInit() {
  }

  openSnackBar() {
    // this.snack.openFromComponent( , {
    //   duration: 500,
    // });
  }
}
