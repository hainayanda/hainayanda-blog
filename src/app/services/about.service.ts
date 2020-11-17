import { Injectable, isDevMode } from '@angular/core';
import { Skills } from '../models/skills';
import { MainPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from './base-service';
import { MOCK_ABOUT, MOCK_EXPERIENCE, MOCK_SKILLS } from './mock/mock-about';

export interface IAboutService {
  getSkills(): Observable<Skills>;
  getAboutPage(): Observable<MainPage>;
  getExperiences(): Observable<Experience[]>;
}

@Injectable({
  providedIn: 'root'
})
export class AboutService extends BaseService implements IAboutService {

  endPoint: string = this.serviceUrl + '/about';

  constructor(private httpClient: HttpClient) { super(); }

  getSkills(): Observable<Skills> {
    if (isDevMode()) {
      return of(MOCK_SKILLS);
    }
    return this.httpClient.get<Skills>(this.endPoint + '/skills');
  }

  getAboutPage(): Observable<MainPage> {
    if (isDevMode()) {
      return of(MOCK_ABOUT);
    }
    return this.httpClient.get<MainPage>(this.endPoint + '/page');
  }

  getExperiences(): Observable<Experience[]> {
    if (isDevMode()) {
      return of(MOCK_EXPERIENCE);
    }
    return this.httpClient.get<Experience[]>(this.endPoint + '/exp');
  }
}
