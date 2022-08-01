import { Component, OnInit } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})
export class Lesson5Component implements OnInit {

  pointsClickedArray:string[] = [];

  constructor() { }

  ngOnInit(): void {
    const click = fromEvent(document, 'click');
    const positions = click.pipe(
      tap(
        (event) => console.log(`Procesado: ${event}`),
        (err) => console.log(err),
        () => console.log('completado')
        )
    );

    positions.subscribe(({x,y}:any) => {
      console.log(x,y);
      this.pointsClickedArray.push(`X:${x}, Y:${y}`)
    })
  }

}
