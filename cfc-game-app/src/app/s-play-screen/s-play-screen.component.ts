import {Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-s-play-screen',
  templateUrl: './s-play-screen.component.html',
  styleUrls: ['./s-play-screen.component.scss']
})
export class SPlayScreenComponent implements OnInit {
  soundClick;
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
    const playPromise = this.soundClick.play();

    if (playPromise !== null) {
      playPromise.catch(() => {
        this.soundClick.play();
      });
    }

    setTimeout(() => {
      if (e.amount) {
        this.amount = e.amount;
      }
      if (e.rate) {
        this.rate = e.rate;
      }

      const currentAmount = this.amount / environment.currentRate;
      const profitAmount = this.amount / e.rate;

      this.profit = Math.round((profitAmount - currentAmount) * environment.currentRate);

      this.steps.forEach(s => (s.visible = false));
      this.steps[step].visible = true;
      window.scrollTo(0, 0); // todo change later to scroll to host element
    }, 100);
  }

  ngOnInit(): void {
    this.soundClick = new Audio('https://vocaroo.com/media_command.php?media=s0U9ojuthZ20&command=download_mp3');
  }
}
