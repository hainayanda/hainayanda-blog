import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { MainPage } from 'src/app/models/main.page';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mainPage: MainPage;
  skills: Skills

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
    this.getPage()
  }

  getPage(){
    this.aboutService.getAboutPage().subscribe(page => this.mainPage = page)
    this.aboutService.getSkills().subscribe(skills => this.skills = skills)
  }

}
