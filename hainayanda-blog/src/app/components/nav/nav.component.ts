import { Component, OnInit } from '@angular/core';
import { ExternalLinks } from 'src/app/models/external.links';
import { PageService } from 'src/app/services/page.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  externalLinks: ExternalLinks

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getExternalLinks()

    $("#js-menu").click(() => $("#js-navbar-toggle").toggleClass("active"))

    $(() => {
      $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
      });
    });
  }

  getExternalLinks(){
    this.pageService.getExternalLinks().subscribe( externalLinks => this.externalLinks = externalLinks)
  }

}
