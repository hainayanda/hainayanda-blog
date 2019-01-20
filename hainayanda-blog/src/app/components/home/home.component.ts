import { Component, OnInit, Inject } from '@angular/core';
import { MainPage } from 'src/app/models/page';
import { IHomeService, HomeService } from 'src/app/services/home.service';
import { PageComponent } from '../BaseComponent';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {provide: 'IHomeService', useClass: HomeService}
  ]
})
export class HomeComponent extends PageComponent implements OnInit {

  page: MainPage

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
