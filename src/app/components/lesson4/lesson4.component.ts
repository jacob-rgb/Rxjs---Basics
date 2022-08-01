import { Component, OnInit } from '@angular/core';
import { filter, map, of, pipe } from 'rxjs';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {

  numsObs: any = of(1,2,3,4,5);
  originalNumbers: number[] = [];
  numsIcreased: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.numsObs.subscribe((num) =>  {
      this.originalNumbers.push(num)
    })
    this.pairNumsIncreasedPipe(this.numsObs).subscribe((numsIncreased) => {
      this.numsIcreased.push(numsIncreased);
    })
  }
  
 pairNumsIncreasedPipe = pipe(
    filter((num: number) => num % 2 === 0),
    map((num:number) => num * 2)
  );

}
