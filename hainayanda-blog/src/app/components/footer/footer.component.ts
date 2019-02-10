import { Component, OnInit, Inject } from '@angular/core';
import { FooterPage } from '../../models/page';
import { IPageService, PageService, MOCK_FOOTER, MOCK_EXTERNAL_LINKS } from '../../services/page.service';
import { ExternalLinks } from '../../models/external.links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [
    {provide: 'IPageService', useClass: PageService}
  ]
})
export class FooterComponent implements OnInit {

  footer: FooterPage = FooterPage.placeholder
  externalLinks: ExternalLinks = new ExternalLinks()

  constructor(@Inject('IPageService') private pageService: IPageService) { }

  ngOnInit() {
    this.getPage()
  }

  getPage() {
    this.pageService.getFooter().subscribe(footer => this.footer = footer, 
      _ => this.footer = MOCK_FOOTER)
    this.pageService.getExternalLinks().subscribe(externalLinks => this.externalLinks = externalLinks, 
      _ => this.externalLinks = MOCK_EXTERNAL_LINKS)
  }

}
