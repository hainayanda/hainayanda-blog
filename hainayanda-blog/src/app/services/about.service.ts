import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { MainPage } from '../models/page';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getSkills(): Observable<Skills> {
    return of(MOCK_SKILLS);
  }

  getAboutPage(): Observable<MainPage> {
    return of(MOCK_ABOUT);
  }
}

const MOCK_ABOUT: MainPage = {
  title: "About Me",
  subtitle: "Nayanda Haberty",
  paragraph: "Born at Jakarta, on 10 May 1991. Love to draw, painting and gaming. Passionate with science, history and technology. Now still living in Jakarta. \n\n" +
    "Everything started even before I'm going to college. It started in my high school period. Started when I try and learn by myself to exploit some open source bot for online games until I decided to seriously learn about programming. \n\n" +
    "My curiousity started from the question about \"how can some electrical device can perform such a thing just by a bunch of code?\". This curiousity lead me to Computer Engineering Major. Later this curiousity became passion in programming, in like all type of software development."
}

const MOCK_SKILLS: Skills = {
  title: "Programming Language",
  description: "I personally have my first programming experience with PERL, but then I dig deep into C and C++ as my basic learning language. Later, Java is the language that mostly thougt me many fundamentals of Object Oriented Programming language \n\n"
    + "On app development, I prefer the native approach, since the native generally have better performance than its hybrid alternative. I usually using Kotlin for Android and Swift for iOS as this languages are offer more modern approach for developing instead of Java or Objective-C. \n\n"
    + "For web development, since I usually using Angular 2 or above, TypeScript is my first option for my front end language. The back-end can adjusted according to the requirement.",
  skills: [
    { name: "C# & Java", value: 0.9 },
    { name: "Kotlin", value: 0.8 },
    { name: "Swift", value: 0.85 },
    { name: "JavaScript & TypeScript", value: 0.75 },
    { name: "C/C++", value: 0.7 }
  ],
  devSkills: [
    { name: "Mobile App Development", value: 0.9 },
    { name: "Web Development", value: 0.8 },
    { name: "Back-End Development", value: 0.85 },
    { name: "Desktop Application", value: 0.75 },
    { name: "Hardware Programming", value: 0.7 }
  ],
  otherSkills: ["Spring Framework", "AngularJS", "JQuery", "SQL", "MongoDB", "REST API", ".Net Core", "ASP .NET", "Microcontroller", "Basic Electronics", "PERL"]
}
