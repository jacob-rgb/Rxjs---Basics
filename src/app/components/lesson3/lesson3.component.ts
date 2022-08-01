import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  @ViewChild('element', { static: true }) element: ElementRef;

  mouseMove:any;
  screenCoordinates: [number, number] | string = 'unset'

  constructor() { }

  ngOnInit(): void {
    this.mouseMove = fromEvent(this.element.nativeElement, 'mousemove');

    this.mouseMove.subscribe( (event: MouseEvent) => {
      console.log(event);
      this.screenCoordinates = [event.offsetX, event.offsetY]
    })
  }

}
