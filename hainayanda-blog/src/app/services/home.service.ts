import { Injectable } from '@angular/core';
import { MainPage } from '../models/page';
import { Observable, of, Scheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHomePage() : Observable<MainPage> {
    return of(MOCK_HOME);
  }
}

const MOCK_HOME: MainPage = {
  title: "Hi!\nI'm Nayanda\n",
  subtitle: "Programmer",
  paragraph: "Not just one kind of programmer. Most experienced with mobile apps development, but can do web development, back-end development, desktop application or even hardware programming."
}