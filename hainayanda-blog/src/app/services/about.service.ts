import { Injectable, isDevMode } from '@angular/core';
import { Skills } from '../models/skills';
import { MainPage } from '../models/page';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from './base-service';

@Injectable({
  providedIn: 'root'
})
export class AboutService extends BaseService implements IAboutService {

  endPoint:string = this.serviceUrl + '/about'
  
  constructor(private httpClient: HttpClient) { super() }

  getSkills(): Observable<Skills> {
    if(isDevMode()){
      return of(MOCK_SKILLS);
    }
    return this.httpClient.get<Skills>(this.endPoint + '/skills')
  }

  getAboutPage(): Observable<MainPage> {
    if(isDevMode()){
      return of(MOCK_ABOUT);
    }
    return this.httpClient.get<MainPage>(this.endPoint + '/page')
  }

  getExperiences(): Observable<Experience[]> {
    if(isDevMode()){
      return of(MOCK_EXPERIENCE);
    }
    return this.httpClient.get<Experience[]>(this.endPoint + '/exp')
  }
}

export interface IAboutService {
  getSkills(): Observable<Skills>
  getAboutPage(): Observable<MainPage>
  getExperiences(): Observable<Experience[]>
}

export const MOCK_ABOUT: MainPage = {
  title: "About Me",
  subtitle: "Nayanda Haberty",
  paragraph: "Born at Jakarta, on 10 May 1991. Love to draw, painting and gaming. Passionate with science, history and technology. Now still living in Jakarta. \n\n" +
    "Everything started even before I'm going to college but in my high school period when I try and learn by myself to exploit some open source bot for online games. \n\n" +
    "My curiousity started from the question about \"how can some electrical device can perform such a thing just by a bunch of code?\" which then lead me to Computer Engineering Major. Later this curiousity became passion."
}

export const MOCK_SKILLS: Skills = {
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
  otherSkills: ["HTML", "CSS", "Spring Framework", "Angular", "JQuery", "SQL", "MongoDB", "REST API", ".Net Core", "ASP .NET", "Micro Controller", "Basic Electronics", "PERL", "Computer Science", "Basic Machine Learning", "Assembly Language"]
}

export const MOCK_EXPERIENCE: Experience[] = [
  {
    officeName: "Bukalapak",
    officeLogo: "https://res.cloudinary.com/hainayanda/image/upload/v1547886175/BukalapakLogo.png",
    position: "iOS Developer",
    startDate: new Date(2018, 10).getTime(),
    endDate: null,
    location: "South Jakarta, Greater Jakarta, Indonesia",
    description: "Developing and maintain Bukalapak iOS Application"
  },
  {
    officeName: "Kencana Graha Global",
    officeLogo: "https://res.cloudinary.com/hainayanda/image/upload/v1547886175/KG-Logo.png",
    position: "Software Developer",
    startDate: new Date(2017, 5).getTime(),
    endDate: new Date(2018, 9).getTime(),
    location: "Central Jakarta, Greater Jakarta, Indonesia",
    description: "Developing Back-End, iOS and Android application for start-up"
  },
  {
    officeName: "PT Kreatif Media Karya",
    officeLogo: "https://res.cloudinary.com/hainayanda/image/upload/v1547886175/KMKLogo.png",
    position: "Test Engineer",
    startDate: new Date(2017, 2).getTime(),
    endDate: new Date(2017, 5).getTime(),
    location: "Central Jakarta, Greater Jakarta, Indonesia",
    description: "Create and maintain test and develop tester tools for Liputan6.com"
  },
  {
    officeName: "PT Aprisma Wirecard",
    officeLogo: "https://res.cloudinary.com/hainayanda/image/upload/v1547886175/WirecardLogo.png",
    position: "Java Developer",
    startDate: new Date(2016, 5).getTime(),
    endDate: new Date(2017, 1).getTime(),
    location: "South Jakarta, Greater Jakarta, Indonesia",
    description: "Java Developer"
  },
  {
    officeName: "Freelance",
    officeLogo: "https://res.cloudinary.com/hainayanda/image/upload/v1547886175/GraphicDesignLogo.png",
    position: "Graphic Designer",
    startDate: new Date(2016, 3).getTime(),
    endDate: new Date(2016, 5).getTime(),
    location: "South Jakarta, Greater Jakarta, Indonesia",
    description: "Design Poster, Banner, Logo"
  },
]