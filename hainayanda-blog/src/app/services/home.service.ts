import { Injectable, isDevMode } from '@angular/core';
import { MainPage } from '../models/page';
import { Observable, of, Scheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService implements IHomeService {

  endPoint: string = this.serviceUrl + '/home'

  constructor(private httpClient: HttpClient) { super() }

  getHomePage(): Observable<MainPage> {
    if(isDevMode()){
      return of(MOCK_HOME);
    }
    return this.httpClient.get<MainPage>(this.endPoint + '/page')
  }
}

export interface IHomeService {
  getHomePage(): Observable<MainPage>
}

export const MOCK_HOME: MainPage = {
  title: "Hi!\nI'm Nayanda\n",
  subtitle: "Programmer",
  paragraph: "Not just one kind of programmer. Most experienced with mobile apps development, but can do web development, back-end development, desktop application or even hardware programming."
}