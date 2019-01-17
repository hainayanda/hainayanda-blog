export class Page {
    title: string;
    paragraph: string;
}

export class MainPage extends Page{
    subtitle: string;
}

export class FooterPage extends Page {
    phoneNumber: string;
    email: string;

}