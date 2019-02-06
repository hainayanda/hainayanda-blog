import { Dto } from "./dto";
import { DbCollection } from "../connection";
//error
export class PageDao extends DbCollection<PageDto> {

    static instance = new PageDao()

    constructor(){
        super("page")
    }
}

export class PageDto extends Dto {
    page?: string
    title?: string
    subtitle?: string
    paragraph?: string
}