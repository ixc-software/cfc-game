import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { inherits } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
	if (location.protocol === 'http:') {
            window.location.href = location.href.replace('http', 'https');
        }
  }
}
