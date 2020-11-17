import { Injectable, isDevMode } from '@angular/core';
import { FooterPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { ExternalLinks } from '../models/external.links';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { MOCK_EXTERNAL_LINKS, MOCK_FOOTER } from './mock/mock-external-links';

export interface IPageService {
  getFooter(): Observable<FooterPage>;
  getExternalLinks(): Observable<ExternalLinks>;
}

@Injectable({
  providedIn: 'root'
})
export class PageService extends BaseService implements IPageService {

  endPoint: string = this.serviceUrl + '/page';

  constructor(private httpClient: HttpClient) { super(); }

  getFooter(): Observable<FooterPage> {
    if (isDevMode()) {
      return of(MOCK_FOOTER);
    }
    return this.httpClient.get<FooterPage>(this.endPoint + '/footer');
  }

  getExternalLinks(): Observable<ExternalLinks> {
    if (isDevMode()) {
      return of(MOCK_EXTERNAL_LINKS);
    }
    return this.httpClient.get<ExternalLinks>(this.endPoint + '/extlinks');
  }

}
