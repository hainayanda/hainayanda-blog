import { ProjectDto } from "../db/dto/project";

export class Project {
    id?: string
    name?: string
    pictures?: string[]
    tags?: ProjectTag[]
    startedDate?: number
    endDate?: number
    description?: string
    link?: string

    static parsedFrom(project: ProjectDto): Project {
        let parsed = new Project()
        if(project._id != null) parsed.id = project._id.toHexString()
        parsed.name = project.name
        parsed.pictures = project.pictures
        parsed.tags = this.parseTags(project.tags)
        if(project.startedDate) parsed.startedDate = project.startedDate.getTime()
        if(project.endDate) parsed.endDate = project.endDate.getTime()
        parsed.description = project.description
        parsed.link = project.link
        return parsed
    }

    private static parseTags(tags: string[]): ProjectTag[]{
        let parsed: ProjectTag[] = []
        tags.forEach(tag => {
            parsed.push(this.parseTag(tag))
        });
        return parsed
    }

    private static parseTag(tag: string): ProjectTag {
        if(tag == "iOS") return ProjectTag.iOS
        else if(tag == "Android") return ProjectTag.Android
        else if(tag == ".Net") return ProjectTag.Net
        else if(tag == "Desktop") return ProjectTag.Desktop
        else if(tag == "Website") return ProjectTag.Website
        else if(tag == "Back End") return ProjectTag.Backend
        else if(tag == "IOT") return ProjectTag.IOT
        else if(tag == "Open Source") return ProjectTag.OpenSource
        else if(tag == "SDK") return ProjectTag.SDK
        else return ProjectTag.Extension
    }
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