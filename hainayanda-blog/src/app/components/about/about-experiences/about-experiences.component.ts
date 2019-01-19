import { Component, OnInit, Inject, HostListener } from '@angular/core';
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

  scrHeight:any;
  scrWidth:any;

  constructor(@Inject('IAboutService') private aboutService: IAboutService) {
    this.getScreenSize()
   }

  ngOnInit() {
    this.getExperiences()
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

  formatDate(date: Date): string {
    if (date == null) return "Present";
    else {
      var month: string = monthNames[date.getMonth()];
      var year: string = date.getFullYear().toString()
      return month + " " + year
    }
  }

  marginRightAt(index: number): string {
    if(this.scrWidth < 900) return "0px" 
    let cellWidth: number = 0.48 * this.scrWidth
    let middle: number = this.scrWidth - (cellWidth * 2) - outerPadding
    if(index % 2 === 0) return middle + "px"
    return "0px"
  }

  getExperiences() {
    this.aboutService.getExperiences().subscribe((experiences) => this.experiences = experiences)
  }

}

const outerPadding = 36

const monthNames: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"
]