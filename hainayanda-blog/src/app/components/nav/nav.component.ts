import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let navbar = document.getElementById('navbar');
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      if(mainNav.classList.contains('active')){
        navbar.style.height = "180px"
      }
      else {
        navbar.style.height = "72px"
      }
    });
  }

}
