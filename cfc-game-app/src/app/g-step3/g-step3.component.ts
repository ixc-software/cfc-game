import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { environment } from 'src/environments/environment.etherium';

@Component({
  selector: 'app-g-step3',
  templateUrl: './g-step3.component.html',
  styleUrls: ['./g-step3.component.scss']
})
export class GStep3Component implements OnInit {
  @Input() profit;
  @Output() select: EventEmitter<any> = new EventEmitter();

  public environment = environment;

  public selected() {
    this.select.emit({});
  }

  constructor() { }

  public getMoney() {
    const win = window.open(environment.redirectUrl, '_blank');
    win.focus();    
  }

  ngOnInit() {
  }
}
