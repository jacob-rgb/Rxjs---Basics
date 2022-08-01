import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {

  counterIntervalTime: number = 1000;
  count: number = 0;
  counterLimit: number = 8;
  counterSubscription: Subscription
  counterInterval: any

  constructor() { }

  ngOnInit(): void {
    this.startInterval();
  }

  public startInterval() {
    this.count = 0;
    this.counterInterval = interval(this.counterIntervalTime);
    // this.counterInterval = timer(this.counterIntervalTime);

    this.counterSubscription = this.counterInterval.subscribe((count) => {
      if(count === this.counterLimit) {
        this.counterSubscription.unsubscribe();
      }
      this.count = count;
    })
  }

}
