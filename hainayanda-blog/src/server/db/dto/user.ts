import { Dto } from "./dto";
import { DbCollection } from "../connection";
//error
export class UserDao extends DbCollection<UserDto> {

    static instance = new UserDao()

    constructor(){
        super("user")
    }
}

export class UserDto extends Dto {
    name?: string
    phoneNumber?: string
    email?: string
}