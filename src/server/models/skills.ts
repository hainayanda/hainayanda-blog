import { PageDto } from '../db/dto/page';
import { SkillDto } from '../db/dto/skill';

export class Skill {
    name?: string;
    value?: number;

    static parseFrom(skill: SkillDto): Skill {
        const parsed = new Skill();
        parsed.name = skill.name;
        parsed.value = skill.value;
        return parsed;
    }
}

export class Skills {
    title?: string;
    description?: string;
    skills: Skill[] = [];
    devSkills: Skill[] = [];
    otherSkills: String[] = [];

    static parseFrom(page: PageDto, skills: SkillDto[]): Skills {
        const parsed = new Skills();
        parsed.title = page.title;
        parsed.description = page.paragraph;
        skills.forEach(skill => {
            if (skill.type === 0) {
                parsed.skills.push(Skill.parseFrom(skill));
            } else if (skill.type === 1) {
                parsed.devSkills.push(Skill.parseFrom(skill));
            } else if (skill.name != null) {
                parsed.otherSkills.push(skill.name);
            }
        });
        return parsed;
    }
}
