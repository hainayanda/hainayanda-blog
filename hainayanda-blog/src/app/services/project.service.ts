import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectTag } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements IProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(MOCK_PROJECTS)
  }
}

export interface IProjectService {
  getProjects(): Observable<Project[]>
}

const MOCK_PROJECTS: Project[] = [
  {
    name: "Hai Nayanda Web",
    picures: [],
    tags: [ProjectTag.Website, ProjectTag.OpenSource],
    startedDate: new Date(2018, 11),
    endDate: null,
    description: "This web, offcourse. Using Angular and Node JS.",
    link: null
  },
  {
    name: "Topaz Android",
    picures: [],
    tags: [ProjectTag.Android, ProjectTag.SDK],
    startedDate: new Date(2018, 11),
    endDate: new Date(2019, 0),
    description: "Agate Studio project. Android SDK to show web view on top of screen with side menu, transparency bar and language selector. It can transform into draggable floating button if minimized",
    link: null
  },
  {
    name: "Topaz iOS",
    picures: [],
    tags: [ProjectTag.iOS, ProjectTag.SDK],
    startedDate: new Date(2018, 11),
    endDate: new Date(2019, 0),
    description: "Agate Studio project. iOS SDK to show web view on top of screen with side menu, transparency bar and language selector. It can transform into draggable floating button if minimized",
    link: null
  },
  {
    name: "iOS Nativefier",
    picures: [],
    tags: [ProjectTag.iOS, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 7),
    endDate: null,
    description: "iOS Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.",
    link: "https://github.com/nayanda1/iOSNativefier"
  },
  {
    name: "Droid Nativefier",
    picures: [],
    tags: [ProjectTag.Android, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 2),
    endDate: null,
    description: "Android Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.",
    link: "https://github.com/nayanda1/DroidNativefier"
  },
  {
    name: "Net Nativefier",
    picures: [],
    tags: [ProjectTag.Net, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 7),
    endDate: null,
    description: ".Net Library to stored object and data into cache. The library using 2 different place for cache, which is Disk and Memory. Its used LRU Algorithm.",
    link: "https://github.com/nayanda1/NetNativefier"
  },
  {
    name: "iOS Eatr",
    picures: [],
    tags: [ProjectTag.iOS, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 1),
    endDate: null,
    description: "iOS Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.",
    link: "https://github.com/nayanda1/iOSEatr"
  },
  {
    name: "Droid Eatr",
    picures: [],
    tags: [ProjectTag.Android, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2017, 11),
    endDate: null,
    description: "Android Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.",
    link: "https://github.com/nayanda1/DroidEatr"
  },
  {
    name: "Net Eatr",
    picures: [],
    tags: [ProjectTag.Net, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 1),
    endDate: null,
    description: ".Net Library to consume RESTful web service API. Can autoparsed JSON into Object and support synchronous and asynchronous operation.",
    link: "https://github.com/nayanda1/NetEatr"
  },
  {
    name: "Catcher",
    picures: [],
    tags: [ProjectTag.Net, ProjectTag.SDK, ProjectTag.OpenSource],
    startedDate: new Date(2018, 9),
    endDate: null,
    description: "CosmosDB Based with MongoDB Interface, with generic DAO Design Pattern for .NET Framework with C# Language.",
    link: "https://github.com/catchid/catcher"
  },
  {
    name: "RobotF-Extension",
    picures: [],
    tags: [ProjectTag.Desktop, ProjectTag.Extension, ProjectTag.OpenSource],
    startedDate: new Date(2017, 3),
    endDate: new Date(2017, 10),
    description: "Visual Studio Code extension for robot framework. this extension is still in its early stage but its fully functional. This Extension was created for internal use for Test Engineer at KMK-Labs, but published into Visual Studio Code Extension Marketplace for everyone to use",
    link: "https://github.com/KMK-ONLINE/vscode-robotExtension"
  },
  {
    name: "Carrier",
    picures: [],
    tags: [ProjectTag.Android, ProjectTag.OpenSource],
    startedDate: new Date(2018, 2),
    endDate: new Date(2018, 4),
    description: "Prototype android app for Pertamina Hackathon. This is the app to get the list of addresses to deliver for the driver. it will calculate the fastest route and which addresses needed to deliver first",
    link: "https://github.com/nayanda1/shipping-manager"
  },
  {
    name: "Speaker Recognition",
    picures: [],
    tags: [ProjectTag.IOT, ProjectTag.OpenSource],
    startedDate: new Date(2016, 6),
    endDate: new Date(2017, 0),
    description: "Java Project for speaker recognition, programs that can learn human's voice's signatures and verifying it. The program is based on LPC (Linear Predictive Coefficient) and MFCC (Mel-frequency Cepstral Coefficients) algorithm. ",
    link: "https://github.com/KMK-ONLINE/vscode-robotExtension"
  },
]


