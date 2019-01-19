import { Injectable } from '@angular/core';
import { FooterPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { ExternalLinks } from '../models/external.links';

@Injectable({
  providedIn: 'root'
})
export class PageService implements IPageService {

  constructor() { }

  getFooter(): Observable<FooterPage> {
    return of(MOCK_FOOTER);
  }

  getExternalLinks(): Observable<ExternalLinks> {
    return of(MOCK_EXTERNAL_LINKS)
  }

}

export interface IPageService {
  getFooter(): Observable<FooterPage>
  getExternalLinks(): Observable<ExternalLinks>
}

const MOCK_EXTERNAL_LINKS: ExternalLinks = {
  github: "https://github.com/nayanda1",
  linkedin: "https://www.linkedin.com/in/nayanda/",
  email: "mailto:nayanda1@outlook.com"
}

const MOCK_FOOTER: FooterPage = {
  title: "Contact Me",
  paragraph: "I'm currently open for any projects. Would you like to discuss yours? Feel free to contact me through this below phone number and my personal email.",
  phoneNumber: "+628576500763",
  email: "nayanda1@outlook.com"
}