import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(private gameService: GameService) {}

  public showLoadingScreen = true;
  public showPlayScreen = false;

  ngOnInit() {
    setTimeout(() => {
      this.showLoadingScreen = false;
      this.showPlayScreen = true;
    }, 3000);
    this.gameService.gameStart().subscribe(resp => {
      console.log('gameStart', resp);
    });
  }
}
