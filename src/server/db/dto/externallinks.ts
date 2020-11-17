import { Dto } from './dto';
import { DbCollection } from '../connection';

export class ExternalLinksDao extends DbCollection<ExternalLinksDto> {

    static instance = new ExternalLinksDao();

    constructor() {
        super('external_link');
    }
}

export class ExternalLinksDto extends Dto {
    type?: string;
    link?: string;
}
