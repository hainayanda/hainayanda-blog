import { Component, OnInit } from '@angular/core';
import { MainPage } from 'src/app/models/main.page';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page: MainPage

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getPage()
  }

  getPage(){
    this.homeService.getHomePage().subscribe(page => this.page = page)
  }

}
