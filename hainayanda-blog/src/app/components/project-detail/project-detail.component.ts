import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, IProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '../BaseComponent';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [
    { provide: 'IProjectService', useClass: ProjectService }
  ]
})
export class ProjectDetailComponent extends BaseComponent implements OnInit, OnDestroy {

  project: Project
  private sub: any

  constructor(
    private route: ActivatedRoute,
    private carouselConfig: NgbCarouselConfig,
    @Inject('IProjectService') private projectService: IProjectService) {
      super()
     }

  ngOnInit() {
    this.carouselConfig.interval = 10000

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
