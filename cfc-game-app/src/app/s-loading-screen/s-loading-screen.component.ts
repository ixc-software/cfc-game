import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-loading-screen',
  templateUrl: './s-loading-screen.component.html',
  styleUrls: ['./s-loading-screen.component.scss']
})
export class SLoadingScreenComponent implements OnInit {
  constructor() {}

  public progress = 0;

  ngOnInit() {
    const interval = setInterval(() => {
      this.progress += 2.0;
      if (this.progress === 100) {
        clearInterval(interval);
      }
    }, 100);
  }
}
