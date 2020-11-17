import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-other-skills',
  templateUrl: './about-other-skills.component.html',
  styleUrls: ['./about-other-skills.component.css']
})
export class AboutOtherSkillsComponent implements OnInit {

  @Input() skills: String[];

  constructor() { }

  ngOnInit() {
  }

}
