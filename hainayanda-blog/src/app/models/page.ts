export class Page {
    title: string;
    paragraph: string;

    static get placeholder(): Page {
        let page = new Page()
        page.title = "This is title"
        page.paragraph = ""
        return page
    }
}

export class MainPage extends Page{
    subtitle: string;

    static get placeholder(): MainPage {
        let page = new MainPage()
        page.title = "This is title"
        page.paragraph = ""
        page.subtitle = "This is subtitle"
        return page
    }
}

export class FooterPage extends Page {
    phoneNumber: string;
    email: string;

    static get placeholder(): FooterPage {
        let page = new FooterPage()
        page.title = "This is title"
        page.paragraph = ""
        page.email = ""
        page.phoneNumber = ""
        return page
    }

}