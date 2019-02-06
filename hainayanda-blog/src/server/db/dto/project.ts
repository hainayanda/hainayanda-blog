import { Dto } from "./dto";
import { DbCollection } from "../connection";

export class ProjectDao extends DbCollection<ProjectDto> {

    static instance = new ProjectDao()

    constructor(){
        super("project")
    }
}

export class ProjectDto extends Dto {
    name?: string
    pictures: string[] = []
    tags: string[] = []
    startedDate?: Date
    endDate?: Date
    description?: string
    link?: string
}