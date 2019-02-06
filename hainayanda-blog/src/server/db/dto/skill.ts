import { Dto } from "./dto";
import { DbCollection } from "../connection";

export class SkillDao extends DbCollection<SkillDto> {

    static instance = new SkillDao()

    constructor(){
        super("skill")
    }
}

export class SkillDto extends Dto {
    type?: number
    name?: string
    value?: number
}