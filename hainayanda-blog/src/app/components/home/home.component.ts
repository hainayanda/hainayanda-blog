import { Component, OnInit, Inject } from '@angular/core';
import { MainPage } from '../../models/page';
import { PageComponent } from '../BaseComponent';
import { HomeService, IHomeService } from '../../services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {provide: 'IHomeService', useClass: HomeService}
  ]
})
export class HomeComponent extends PageComponent implements OnInit {

  page: MainPage = MainPage.placeholder

  constructor(@Inject('IHomeService') private homeService: IHomeService) {
    super()
  }

  ngOnInit() {
    this.getPage()
  }

  getPage() {
    this.homeService.getHomePage().subscribe(page => this.page = page)
  }

}
