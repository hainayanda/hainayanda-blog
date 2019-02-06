import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../../models/skills';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.css']
})
export class AboutSkillsComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() skills: Skill[];

  constructor() { }

  ngOnInit() {
  }

}
