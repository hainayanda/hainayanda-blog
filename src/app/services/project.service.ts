import { Injectable, isDevMode } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base-service';
import { MOCK_PROJECTS } from './mock/mock-projects';

export interface IProjectService {
  getProjects(): Observable<Project[]>;
  getProjectBy(id: string): Observable<Project>;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService implements IProjectService {

  endPoint: string = this.serviceUrl + '/project';
  constructor(private httpClient: HttpClient) { super(); }

  getProjects(): Observable<Project[]> {
    if (isDevMode()) {
      return of(MOCK_PROJECTS.sort((a, b) => {
        return (b.startedDate - a.startedDate);
      }));
    }
    return this.httpClient.get<Project[]>(this.endPoint + '/all');
  }

  getProjectBy(id: string): Observable<Project> {
    if (isDevMode()) {
      return of(MOCK_PROJECTS.find(project => project.id == id));
    }
    return this.httpClient.get<Project>(this.endPoint + '/' + id);
  }
}
