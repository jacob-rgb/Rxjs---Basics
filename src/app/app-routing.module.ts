import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson10Component } from './components/lesson10/lesson10.component';
import { Lesson11Component } from './components/lesson11/lesson11.component';
import { Lesson12Component } from './components/lesson12/lesson12.component';
import { Lesson13Component } from './components/lesson13/lesson13.component';
import { Lesson14Component } from './components/lesson14/lesson14.component';
import { Lesson15Component } from './components/lesson15/lesson15.component';
import { Lesson16Component } from './components/lesson16/lesson16.component';
import { Lesson17Component } from './components/lesson17/lesson17.component';
import { Lesson18Component } from './components/lesson18/lesson18.component';
import { Lesson19Component } from './components/lesson19/lesson19.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson20Component } from './components/lesson20/lesson20.component';
import { Lesson21Component } from './components/lesson21/lesson21.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson5Component } from './components/lesson5/lesson5.component';
import { Lesson6Component } from './components/lesson6/lesson6.component';
import { Lesson7Component } from './components/lesson7/lesson7.component';
import { Lesson8Component } from './components/lesson8/lesson8.component';
import { Lesson9Component } from './components/lesson9/lesson9.component';

const routes: Routes = [
  { path: '', redirectTo: '/lesson-1', pathMatch:'full' },
  { path: 'lesson-1', component: Lesson1Component },
  { path: 'lesson-2', component: Lesson2Component },
  { path: 'lesson-3', component: Lesson3Component },
  { path: 'lesson-4', component: Lesson4Component },
  { path: 'lesson-5', component: Lesson5Component },
  { path: 'lesson-6', component: Lesson6Component },
  { path: 'lesson-7', component: Lesson7Component },
  { path: 'lesson-8', component: Lesson8Component },
  { path: 'lesson-9', component: Lesson9Component },
  { path: 'lesson-10', component: Lesson10Component },
  { path: 'lesson-11', component: Lesson11Component },
  { path: 'lesson-12', component: Lesson12Component },
  { path: 'lesson-13', component: Lesson13Component },
  { path: 'lesson-14', component: Lesson14Component },
  { path: 'lesson-15', component: Lesson15Component },
  { path: 'lesson-16', component: Lesson16Component },
  { path: 'lesson-17', component: Lesson17Component },
  { path: 'lesson-18', component: Lesson18Component },
  { path: 'lesson-19', component: Lesson19Component },
  { path: 'lesson-20', component: Lesson20Component },
  { path: 'lesson-21', component: Lesson21Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
