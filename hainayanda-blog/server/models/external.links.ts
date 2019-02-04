import { ExternalLinksDto } from "../db/dto/externallinks";

export class ExternalLinks {
    github?: string;
    linkedin?: string;
    email?: string;

    static parsedFrom(exts: ExternalLinksDto[]): ExternalLinks {
        let parsed = new ExternalLinks()
        exts.forEach(ext => {
            if(ext.type == "github") parsed.github = ext.link
            else if(ext.type == "linkedin") parsed.linkedin = ext.link
            else if(ext.type == "email") parsed.email = ext.link
        });
        return parsed
    }
}