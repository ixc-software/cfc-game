import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from './store-service';
import {GameService} from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private data: DataService,
      private gameService: GameService
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.data.getParams().next(params));
    this.gameService.gameReady().subscribe(resp => {
      console.log('gameReady', resp);
    });
  }
}
