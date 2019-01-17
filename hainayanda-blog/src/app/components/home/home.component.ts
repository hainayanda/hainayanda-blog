import { Component, OnInit } from '@angular/core';
import { MainPage } from 'src/app/models/page';
import { HomeService } from 'src/app/services/home.service';
import { PageComponent } from '../PageComponent';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PageComponent implements OnInit {

  page: MainPage

  constructor(private homeService: HomeService) {
    super()
   }

  ngOnInit() {
    this.getPage()
    this.activateContactMe()
  }

  getPage(){
    this.homeService.getHomePage().subscribe(page => this.page = page)
  }

}
