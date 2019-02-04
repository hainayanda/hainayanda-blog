import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectTag } from '../models/project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements IProjectService {

  endPoint: string = 'api/v1/project'
  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.endPoint + '/all')
  }

  getProjectBy(id: string): Observable<Project> {
    return this.httpClient.get<Project>(this.endPoint + '/' + id)
  }
}

export interface IProjectService {
  getProjects(): Observable<Project[]>
  getProjectBy(id: string): Observable<Project>
}

