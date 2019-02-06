import { PageDto } from "../db/dto/page";
import { UserDto } from "../db/dto/user";

export class Page {
    title?: string;
    paragraph?: string;

    static parsedFrom(page: PageDto): Page {
        let parsed = new Page()
        parsed.title = page.title
        parsed.paragraph = page.paragraph
        return parsed
    }
}

export class MainPage extends Page{
    subtitle?: string;

    static parsedFrom(page: PageDto): MainPage {
        let parsed = new MainPage()
        parsed.title = page.title
        parsed.subtitle = page.subtitle
        parsed.paragraph = page.paragraph
        return parsed
    }
}

export class FooterPage extends Page {

    phoneNumber?: string;
    email?: string;

    static parsedUsing(page: PageDto, user: UserDto): FooterPage {
        let parsed = new FooterPage()
        parsed.title = page.title
        parsed.paragraph = page.paragraph
        parsed.email = user.email
        parsed.phoneNumber = user.phoneNumber
        return parsed
    }
}