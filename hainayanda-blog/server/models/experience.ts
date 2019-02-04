import { ExperienceDto } from "../db/dto/experience";

export class Experience {
    officeName?: string
    officeLogo?: string
    position?: string
    startDate?: Date
    endDate?: Date
    location?: string
    description?: string

    static parsedFrom(experience: ExperienceDto): Experience {
        let parsed = new Experience()
        parsed.officeName = experience.officeName
        parsed.officeLogo = experience.officeLogo
        parsed.position = experience.position
        parsed.startDate = experience.startDate
        parsed.endDate = experience.endDate
        parsed.location = experience.location
        parsed.description = experience.description
        return parsed
    }
}