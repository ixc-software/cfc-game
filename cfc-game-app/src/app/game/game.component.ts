import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor() { }

  public showLoadingScreen = true;
  public showPlayScreen = false;

  ngOnInit() {
    setTimeout(() => {
      this.showLoadingScreen = false;
      this.showPlayScreen = true;
    }, 3000);
  }
}
