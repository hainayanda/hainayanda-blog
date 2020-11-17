import { ExperienceDto } from '../db/dto/experience';

export class Experience {
    officeName?: string;
    officeLogo?: string;
    position?: string;
    startDate?: number;
    endDate?: number;
    location?: string;
    description?: string;

    static parsedFrom(experience: ExperienceDto): Experience {
        const parsed = new Experience();
        parsed.officeName = experience.officeName;
        parsed.officeLogo = experience.officeLogo;
        parsed.position = experience.position;
        if (experience.startDate != null) {
            parsed.startDate = experience.startDate.getTime();
        }
        if (experience.endDate != null) {
            parsed.endDate = experience.endDate.getTime();
        }
        parsed.location = experience.location;
        parsed.description = experience.description;
        return parsed;
    }
}
