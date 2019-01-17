import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutExperiencesComponent } from './components/about/about-experiences/about-experiences.component';
import { AboutSkillsComponent } from './components/about/about-skills/about-skills.component';
import { AboutDevSkillsComponent } from './components/about/about-dev-skills/about-dev-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AboutOtherSkillsComponent } from './components/about/about-other-skills/about-other-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ProjectsComponent,    
    AboutExperiencesComponent, AboutSkillsComponent, AboutDevSkillsComponent, AboutOtherSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
