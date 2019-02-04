import { Dto } from "./dto";
import { DbCollection } from "../connection";

export class ExperienceDao extends DbCollection<ExperienceDto> {

    static instance = new ExperienceDao()

    constructor(){
        super("experience")
    }
}

export class ExperienceDto extends Dto {
    officeName?: string
    officeLogo?: string
    position?: string
    startDate?: Date
    endDate?: Date
    location?: string
    description?: string
}