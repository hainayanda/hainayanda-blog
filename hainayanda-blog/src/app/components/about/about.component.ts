import { Component, OnInit, Inject } from '@angular/core';
import { IAboutService, AboutService } from '../../services/about.service';
import { MainPage } from '../../models/page';
import { Skills } from '../../models/skills';
import { PageComponent } from '../BaseComponent';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    {provide: 'IAboutService', useClass: AboutService}
  ]
})
export class AboutComponent extends PageComponent implements OnInit {

  mainPage: MainPage;
  skills: Skills

  constructor(@Inject('IAboutService') private aboutService: IAboutService) {
    super()
  }

  ngOnInit() {
    this.getPage()
  }

  getPage() {
    this.aboutService.getAboutPage().subscribe(page => this.mainPage = page)
    this.aboutService.getSkills().subscribe(skills => this.skills = skills)
  }

}
