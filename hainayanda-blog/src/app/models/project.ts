export class Project {
    id: string
    name: string
    pictures: string[]
    tags: ProjectTag[]
    startedDate: number
    endDate: number
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