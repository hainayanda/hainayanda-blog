import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { MainPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService implements IAboutService {

  endPoint:string = 'api/v1/about'
  
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<Skills> {
    return this.httpClient.get<Skills>(this.endPoint + '/skills')
  }

  getAboutPage(): Observable<MainPage> {
    return this.httpClient.get<MainPage>(this.endPoint + '/page')
  }

  getExperiences(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.endPoint + '/exp')
  }
}

export interface IAboutService {
  getSkills(): Observable<Skills>
  getAboutPage(): Observable<MainPage>
  getExperiences(): Observable<Experience[]>
}