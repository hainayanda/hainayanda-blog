import { Injectable } from '@angular/core';
import { MainPage } from '../models/page';
import { Observable, of, Scheduler } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements IHomeService {

  endPoint: string = 'api/v1/home'

  constructor(private httpClient: HttpClient) { }

  getHomePage(): Observable<MainPage> {
    return this.httpClient.get<MainPage>(this.endPoint + '/page')
  }
}

export interface IHomeService {
  getHomePage(): Observable<MainPage>
}