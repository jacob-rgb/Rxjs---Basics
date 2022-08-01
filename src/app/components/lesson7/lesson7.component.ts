import { Component, OnInit } from '@angular/core';
import { concat, interval, range, take } from 'rxjs';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.scss']
})
export class Lesson7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const  timer = interval(1000).pipe(
      take(4)
    );

    const rango = range(1,10);

    const result = concat(timer, rango);

    result.subscribe(x => console.log(x));
  }

}
