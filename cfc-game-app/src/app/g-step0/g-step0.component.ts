import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-g-step0',
  templateUrl: './g-step0.component.html',
  styleUrls: ['./g-step0.component.scss']
})
export class GStep0Component {
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() {}
  public environment = environment;

  public selected() {
    const audio = new Audio('https://vocaroo.com/media_command.php?media=s009FWAtLr4w&command=download_mp3');
    const playPromise = audio.play();

    if (playPromise !== null) {
      playPromise.catch(() => {
        audio.play();
      });
    }

    this.select.emit({});
  }
}
