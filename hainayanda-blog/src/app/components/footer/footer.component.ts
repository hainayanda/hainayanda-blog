import { Component, OnInit, Inject } from '@angular/core';
import { FooterPage } from 'src/app/models/page';
import { IPageService, PageService } from 'src/app/services/page.service';
import { ExternalLinks } from 'src/app/models/external.links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [
    {provide: 'IPageService', useClass: PageService}
  ]
})
export class FooterComponent implements OnInit {

  footer: FooterPage
  externalLinks: ExternalLinks

  constructor(@Inject('IPageService') private pageService: IPageService) { }

  ngOnInit() {
    this.getPage()
  }

  getPage() {
    this.pageService.getFooter().subscribe(footer => this.footer = footer)
    this.pageService.getExternalLinks().subscribe(externalLinks => this.externalLinks = externalLinks)
  }

}
