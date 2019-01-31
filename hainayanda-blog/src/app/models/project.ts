export class Project {
    name: string
    pictures: string[]
    tags: ProjectTag[]
    startedDate: Date
    endDate: Date
    description: string
    link: string
}

export enum ProjectTag {
    iOS = "iOS",
    Android = "Android",
    Net = ".Net",
    Desktop = "Desktop",
    Website = "Website",
    Backend = "Back End",
    IOT = "IOT",
    OpenSource = "Open Source",
    SDK = "SDK",
    Extension = "Extension"
}