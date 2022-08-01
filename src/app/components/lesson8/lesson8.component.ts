import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.scss']
})
export class Lesson8Component implements OnInit {

  constructor() { }

  ngOnInit():void{
    const myObservable=Observable.create(function(observer: Observer<any>){
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    const subs =myObservable.subscribe({
      next:x=>console.log('El siguiente valor es' +x),
      error:err=>console.error('Error:'+err),
      complete:()=>console.log('Suscripción Completa'),
    });
    subs.unsubscribe();
  }

  ngOnDestroy() {

  }
}
