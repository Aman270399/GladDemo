import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  redirectaddflight(){
    this.route.navigate(['addflight'])

  }
  redirectdeleteflight(){
    this.route.navigate(['deleteflight'])

  }

}
