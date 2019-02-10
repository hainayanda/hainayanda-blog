import { Injectable, isDevMode } from '@angular/core';
import { FooterPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { ExternalLinks } from '../models/external.links';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class PageService extends BaseService implements IPageService {

  endPoint: string = this.serviceUrl + '/page'

  constructor(private httpClient: HttpClient) { super() }

  getFooter(): Observable<FooterPage> {
    if(isDevMode()){
      return of(MOCK_FOOTER);
    }
    return this.httpClient.get<FooterPage>(this.endPoint + '/footer')
  }

  getExternalLinks(): Observable<ExternalLinks> {
    if(isDevMode()){
      return of(MOCK_EXTERNAL_LINKS);
    }
    return this.httpClient.get<ExternalLinks>(this.endPoint + '/extlinks')
  }

}

export interface IPageService {
  getFooter(): Observable<FooterPage>
  getExternalLinks(): Observable<ExternalLinks>
}

export const MOCK_EXTERNAL_LINKS: ExternalLinks = {
  github: "https://github.com/nayanda1",
  linkedin: "https://www.linkedin.com/in/nayanda/",
  email: "mailto:nayanda1@outlook.com"
}

export const MOCK_FOOTER: FooterPage = {
  title: "Contact Me",
  paragraph: "I'm currently open for any projects. Would you like to discuss yours? Feel free to contact me through this below phone number and my personal email.",
  phoneNumber: "+628576500763",
  email: "nayanda1@outlook.com"
}