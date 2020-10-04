import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Domestic Glide';
  constructor()
  {
    
    

    // Initialize carousel
  }
  ngOnInit(): void {
    var $myCarousel = $('#mycarousel');
    $myCarousel.carousel(
      {
        interval:1000,pause: 'none'
      }
    );
  }
}

