import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/skills';

@Component({
  selector: 'app-about-dev-skills',
  templateUrl: './about-dev-skills.component.html',
  styleUrls: ['./about-dev-skills.component.css']
})
export class AboutDevSkillsComponent implements OnInit {

  @Input() skills: Skill[]

  constructor() { }

  ngOnInit() {
  }

}
