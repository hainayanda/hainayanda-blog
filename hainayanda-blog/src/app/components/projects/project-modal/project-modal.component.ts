import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  @Input() project: Project

  get images(): string[] {
    if (this.project == null) return []
    else if (this.project.pictures == null) return []
    return this.project.pictures
  }

  slideIndex: number = 1

  constructor() {
  }

  ngOnInit() {
  }
  
}
