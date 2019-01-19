import { Component, OnInit, Inject } from '@angular/core';
import { IAboutService, AboutService } from 'src/app/services/about.service';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-about-experiences',
  templateUrl: './about-experiences.component.html',
  styleUrls: ['./about-experiences.component.css'],
  providers: [
    { provide: 'IAboutService', useClass: AboutService }
  ]
})
export class AboutExperiencesComponent implements OnInit {

  experiences: Experience[]

  constructor(@Inject('IAboutService') private aboutService: IAboutService) { }

  ngOnInit() {
    this.getExperiences()
  }

  formatDate(date: Date): string {
    if (date == null) return "Present";
    else {
      var month: string = monthNames[date.getMonth()];
      var year: string = date.getFullYear().toString()
      return month + " " + year
    }
  }

  getExperiences() {
    this.aboutService.getExperiences().subscribe((experiences) => this.experiences = experiences)
  }

}

const monthNames: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"
]