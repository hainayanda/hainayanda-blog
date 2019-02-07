export class Skills {
    title: string;
    description: string;
    skills: Skill[];
    devSkills: Skill[];
    otherSkills: String[];

    static get placeholder(): Skills {
        let skills = new Skills()
        skills.title = "This is title"
        skills.description = ''
        skills.skills = []
        skills.devSkills = []
        skills.otherSkills = []
        return skills
    }
}

export class Skill {
    name: string;
    value: number;
}