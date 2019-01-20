import { Component, OnInit, Inject } from '@angular/core';
import { ExternalLinks } from 'src/app/models/external.links';
import { IPageService, PageService } from 'src/app/services/page.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [
    {provide: 'IPageService', useClass: PageService}
  ]
})
export class NavComponent implements OnInit {

  externalLinks: ExternalLinks

  constructor(@Inject('IPageService') private pageService: IPageService) { }

  ngOnInit() {
    this.getExternalLinks()

    $(() => {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
      });
    });
  }

  onNavMenuClicked(){
    $("#js-menu").toggleClass("active")
  }

  getExternalLinks() {
    this.pageService.getExternalLinks().subscribe(externalLinks => this.externalLinks = externalLinks)
  }

}
