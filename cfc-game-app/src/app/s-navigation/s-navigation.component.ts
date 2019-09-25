import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-s-navigation',
  templateUrl: './s-navigation.component.html',
  styleUrls: ['./s-navigation.component.scss']
})
export class SNavigationComponent {
  constructor(private gameService: GameService) {}

  downloadApp() {
    this.gameService.gameInstall().subscribe(resp => {
      console.log('gameInstall', resp);
    });
  }
}
