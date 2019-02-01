import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectTag } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements IProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(MOCK_PROJECTS.sort((a, b) => {
      return (b.startedDate.getTime() - a.startedDate.getTime())
    }))
  }

  getProjectBy(id: string): Observable<Project> {
    return of(MOCK_PROJECTS.find(project => project.id == id))
  }
}

export interface IProjectService {
  getProjects(): Observable<Project[]>
  getProjectBy(id: string): Observable<Project>
}

const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    name: "Hai Nayanda Web",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548086452/n-logo.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548095243/hainayanda-1.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548095246/hainayanda-2.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548095241/hainayanda-3.png"
    ],
    tags: [ProjectTag.Website, ProjectTag.OpenSource],
    startedDate: new Date(2018, 11),
    endDate: null,
    description: "This web, offcourse. Using Angular and Node JS.",
    link: null
  },
  {
    id: "2",
    name: "Topaz Android",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548091570/topaz-a-logo.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136899/topaz-a-1.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136911/topaz-a-2.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136902/topaz-a-3.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136912/topaz-a-5.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136906/topaz-a-4.png"
    ],
    tags: [ProjectTag.Android, ProjectTag.SDK],
    startedDate: new Date(2018, 11),
    endDate: new Date(2019, 0),
    description: "Agate Studio project. Android SDK to show web view on top of screen with side menu, transparency bar and language selector. It can transform into draggable floating button if minimized",
    link: null
  },
  {
    id: "3",
    name: "Topaz iOS",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548090182/topaz-i-logo.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136903/topaz-i-1.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136905/topaz-i-2.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136909/topaz-3.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136911/topaz-i-3.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548136905/topaz-i-4.png"
    ],
    tags: [ProjectTag.iOS, ProjectTag.SDK],
    startedDate: new Date(2018, 11),
    endDate: new Date(2019, 0),
    description: "Agate Studio project. iOS SDK to show web view on top of screen with side menu, transparency bar and language selector. It can transform into draggable floating button if minimized",
    link: null
  },
  {
    id: "4",
    name: "iOS Nativefier",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548091569/ios-nat-logo.png"
    ],
    tags: [ProjectTag.iOS, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 7),
    endDate: null,
    description: "iOS Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.",
    link: "https://github.com/nayanda1/iOSNativefier"
  },
  {
    id: "5",
    name: "Droid Nativefier",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548091569/droid-nat-logo.png"
    ],
    tags: [ProjectTag.Android, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 2),
    endDate: null,
    description: "Android Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.",
    link: "https://github.com/nayanda1/DroidNativefier"
  },
  {
    id: "6",
    name: "Net Nativefier",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548091569/net-nat-logo.png"
    ],
    tags: [ProjectTag.Net, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 7),
    endDate: null,
    description: ".Net Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.",
    link: "https://github.com/nayanda1/NetNativefier"
  },
  {
    id: "7",
    name: "iOS Eatr",
    pictures: [
    "https://res.cloudinary.com/hainayanda/image/upload/v1548086667/ios-logo.png"
    ],
    tags: [ProjectTag.iOS, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 1),
    endDate: null,
    description: "iOS Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.",
    link: "https://github.com/nayanda1/iOSEatr"
  },
  {
    id: "8",
    name: "Droid Eatr",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548086658/droid-logo.png"
    ],
    tags: [ProjectTag.Android, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2017, 11),
    endDate: null,
    description: "Android Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.",
    link: "https://github.com/nayanda1/DroidEatr"
  },
  {
    id: "9",
    name: "Net Eatr",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548086471/net-logo.png"
    ],
    tags: [ProjectTag.Net, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 1),
    endDate: null,
    description: ".Net Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.",
    link: "https://github.com/nayanda1/NetEatr"
  },
  {
    id: "10",
    name: "Catcher",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548086867/catcher_logo.png"
    ],
    tags: [ProjectTag.Net, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2017, 9),
    endDate: null,
    description: "CosmosDB Based with MongoDB Interface, with generic DAO Design Pattern for .NET Framework with C# Language.",
    link: "https://github.com/catchid/catcher"
  },
  {
    id: "11",
    name: "RobotF-Extension",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548088369/robot-logo.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/smart-keyword-autocomplete.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/smart-resource-autocomplete.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/smart-variable-autocomplete.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/reference-provider.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/keyword-definition.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/variable-definition.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/keyword-rename.png",
      "https://github.com/KMK-ONLINE/vscode-robotExtension/blob/master/variable-rename.png"
    ],
    tags: [ProjectTag.Desktop, ProjectTag.Extension, ProjectTag.OpenSource],
    startedDate: new Date(2017, 3),
    endDate: new Date(2017, 10),
    description: "Visual Studio Code extension for robot framework. this extension is still in its early stage but its fully functional. This Extension was created for internal use for Test Engineer at KMK-Labs, but published into Visual Studio Code Extension Marketplace for everyone to use",
    link: "https://github.com/KMK-ONLINE/vscode-robotExtension"
  },
  {
    id: "12",
    name: "Carrier",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548088663/carrier-logo.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548135407/2018-09-10_5.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548135407/2018-09-10_1.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548135408/2018-09-10_2.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548135408/2018-09-10_3.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548135408/2018-09-10_4.png"
    ],
    tags: [ProjectTag.Android, ProjectTag.OpenSource],
    startedDate: new Date(2018, 2),
    endDate: new Date(2018, 4),
    description: "Prototype android app for Pertamina Hackathon. This is the app to get the list of addresses to deliver for the driver. it will calculate the fastest route and which addresses needed to deliver first",
    link: "https://github.com/nayanda1/shipping-manager"
  },
  {
    id: "13",
    name: "Speaker Recognition",
    pictures: [
      "https://res.cloudinary.com/hainayanda/image/upload/v1548091569/speak-rec-logo.png",
      "https://res.cloudinary.com/hainayanda/image/upload/v1548135608/small.jpg"
    ],
    tags: [ProjectTag.IOT, ProjectTag.Android],
    startedDate: new Date(2016, 6),
    endDate: new Date(2017, 0),
    description: "My Thesis, programs that can learn human's voice's signatures and verifying it. The program is based on LPC (Linear Predictive Coefficient) and MFCC (Mel-frequency Cepstral Coefficients) algorithm. ",
    link: "https://comp-eng.binus.ac.id/2017/03/22/kontroller-rumah-terintegrasi-dengan-pengenalan-google-voice-lpc-speaker/"
  },
]


