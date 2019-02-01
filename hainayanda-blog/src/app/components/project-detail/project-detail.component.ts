import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, IProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [
    { provide: 'IProjectService', useClass: ProjectService }
  ]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  project: Project
  private sub: any

  constructor(
    private route: ActivatedRoute,
    @Inject('IProjectService') private projectService: IProjectService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      let id = params['id']
      this.projectService.getProjectBy(id).subscribe( project => {
        this.project = project
      })
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
