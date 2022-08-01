import { Component, OnInit } from '@angular/core';
import { mapTo, share, tap, timer } from 'rxjs';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.scss']
})
export class Lesson6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const time = timer(1000);

    const obs = time.pipe(
      tap(() => console.log('TAP ON')),
      mapTo('END OBS')
    );

    const subs01 = obs.subscribe(res => console.log(res));
    const subs02 = obs.subscribe(res => console.log(res));

    const shareObs = obs.pipe(share());

    console.log('SHARE ON');

    const subs03 = shareObs.subscribe(val => console.log(val));
    const subs04 = shareObs.subscribe(val => console.log(val));
    const subs05 = shareObs.subscribe(val => console.log(val));    
  }

}
