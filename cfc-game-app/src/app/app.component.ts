import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { inherits } from 'util';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "./store-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private data: DataService
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.data.getParams().next(params));
	// if (location.protocol === 'http:') {
    //         window.location.href = location.href.replace('http', 'https');
    //     }
  }
}
