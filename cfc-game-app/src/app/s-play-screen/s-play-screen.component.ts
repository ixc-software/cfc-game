import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-s-play-screen',
  templateUrl: './s-play-screen.component.html',
  styleUrls: ['./s-play-screen.component.scss']
})
export class SPlayScreenComponent implements OnInit {
  public amount = 0;
  public rate = 0;
  public profit = 0;

  public steps = [
    { id: 0, visible: true },
    { id: 1, visible: false },
    { id: 2, visible: false },
    { id: 3, visible: false }
  ];

  public nextStep(e, step) {
    const audio = new Audio('assets/Sound_02025.mp3');
    const playPromise = audio.play();

    if (playPromise !== null) {
      playPromise.catch(() => { audio.play(); });
    }

    setTimeout(() => {
      if (e.amount) { this.amount = e.amount; }
      if (e.rate) { this.rate = e.rate; }

      const currentAmount = this.amount / environment.currentRate;
      const profitAmount = this.amount / e.rate;

      this.profit = Math.round((profitAmount - currentAmount) * environment.currentRate);

      this.steps.forEach(s => s.visible = false);
      this.steps[step].visible = true;
      window.scrollTo(0, 0);
    }, 100);
  }

  ngOnInit(): void {
  }

  constructor() { }
}
