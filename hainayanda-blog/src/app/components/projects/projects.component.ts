import { Component, OnInit, Inject, ViewChild, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ProjectService, IProjectService } from 'src/app/services/project.service';
import { Project, ProjectTag } from 'src/app/models/project';
import { BaseComponent } from '../BaseComponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [
    { provide: 'IProjectService', useClass: ProjectService }
  ]
})
export class ProjectsComponent extends BaseComponent implements OnInit {

  projects: Project[]
  appliedTags: ProjectTag[] = []
  projectWithAppliedTags: Project[]

  get tags(): ProjectTag[] {
    let tags: Set<ProjectTag> = new Set()
    this.projects.forEach(project => {
      project.tags.forEach(tag => {
        tags.add(tag)
      })
    });
    return Array.from(tags)
  }

  getProjectWithAppliedTags(): Project[] {
    let appliedTags = this.appliedTags
    if (appliedTags.length == 0) return this.projects
    let foundProjects: Project[] = []
    this.projects.forEach(project => {
      let isFound: boolean = false
      project.tags.forEach(tag => {
        if (!isFound) {
          isFound = appliedTags.includes(tag)
          if (isFound) foundProjects.push(project)
        }
      })
    })
    return foundProjects
  }

  constructor(
    private router: Router,
    @Inject('IProjectService') private projectService: IProjectService) {
    super()
  }

  ngOnInit() {
    this.getProjects()
  }

  getProjects() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects
      this.projectWithAppliedTags = this.getProjectWithAppliedTags()
    })
  }

  onSelected(project: Project, content){
    this.router.navigate(['project', project.id])
  }

  onTagClicked(tag: ProjectTag) {
    $("#" + this.formatTagId(tag)).toggleClass('active')
    if (this.appliedTags.includes(tag)) {
      this.appliedTags = this.appliedTags.filter((value, index, arr) => {
        return value != tag
      })
    }
    else {
      this.appliedTags.push(tag)
    }
    this.projectWithAppliedTags = this.getProjectWithAppliedTags()
  }

  formatTagId(tag: ProjectTag) {
    return tag.toLowerCase().replace(' ', '').replace('.', "dot")
  }

  primaryPictureOf(project: Project): string {
    if (project.pictures == null) return "https://res.cloudinary.com/hainayanda/image/upload/v1547995844/project-blank.jpg"
    else if (project.pictures.length == 0) return "https://res.cloudinary.com/hainayanda/image/upload/v1547995844/project-blank.jpg"
    return project.pictures[0]
  }

}