import { Injectable } from '@angular/core';
import { FooterPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { ExternalLinks } from '../models/external.links';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService implements IPageService {

  endPoint: string = 'api/v1/page'

  constructor(private httpClient: HttpClient) { }

  getFooter(): Observable<FooterPage> {
    return this.httpClient.get<FooterPage>(this.endPoint + '/footer')
  }

  getExternalLinks(): Observable<ExternalLinks> {
    return this.httpClient.get<ExternalLinks>(this.endPoint + '/extlinks')
  }

}

export interface IPageService {
  getFooter(): Observable<FooterPage>
  getExternalLinks(): Observable<ExternalLinks>
}