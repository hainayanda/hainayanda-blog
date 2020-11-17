import { Injectable, isDevMode } from '@angular/core';
import { MainPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { MOCK_HOME } from './mock/mock-home';

export interface IHomeService {
  getHomePage(): Observable<MainPage>;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService implements IHomeService {

  endPoint: string = this.serviceUrl + '/home';

  constructor(private httpClient: HttpClient) { super(); }

  getHomePage(): Observable<MainPage> {
    if (isDevMode()) {
      return of(MOCK_HOME);
    }
    return this.httpClient.get<MainPage>(this.endPoint + '/page');
  }
}