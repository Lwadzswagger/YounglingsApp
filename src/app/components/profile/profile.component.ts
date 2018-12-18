import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  countDownDate;
  days;
  distance;
  hours;
  minutes;
  seconds;
  setCountdownInterval() {
    this.countDownDate = new Date('Jan 7, 2019 08:30:25').getTime();
    // Get todays date and time
    const now = new Date().getTime();
    this.distance = this.countDownDate - now;
    this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }


  constructor() {
    }

  ngOnInit() {
    this.setCountdownInterval();
    }



  }
