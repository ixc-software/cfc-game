import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-g-step2',
  templateUrl: './g-step2.component.html',
  styleUrls: ['./g-step2.component.scss']
})
export class GStep2Component implements OnInit {
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public showHand1 = false;
  public showHand2 = false;
  public showHand3 = false;

  public week = { index: 0, title: '' };
  public month = { index: 0, title: '' };
  public year = { index: 0, title: '' };

  public environment = environment;

  ngOnInit() {
    console.log(this);
    this.week.index = this.getRandomFromTo(2, environment.weekRates.length - 1);
    this.week.title = this.getWeekTitle(this.week.index);

    this.month.index = this.getRandomFromTo(1, environment.monthRates.length - 1);
    this.month.title = this.getMonthTitle(this.month.index);

    this.year.index = this.getRandomFromTo(0, environment.yearRates.length - 1);
    this.year.title = this.getYearTitle(this.month.index);

    setTimeout(() => {
      this.showHand1 = true;

      this.startShowHand();
    }, 4000);
  }

  public selected(rate) {
    this.select.emit({rate});
  }

  public startShowHand() {
    setInterval(() => {
      if (this.showHand1) {
        this.showHand1 = false;
        this.showHand3 = false;
        this.showHand2 = true;
        return;
      }

      if (this.showHand2) {
        this.showHand2 = false;
        this.showHand1 = false;
        this.showHand3 = true;
        return;
      }

      if (this.showHand3) {
        this.showHand2 = false;
        this.showHand3 = false;
        this.showHand1 = true;
        return;
      }
    }, 1000);
  }

  private getRandomFromTo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  private getMonthTitle(index) {
    // switch (index + 1) {
    //   case 1:
    //     return 'На 1 месяц';
    //   case 2:
    //   case 3:
    //   case 4:
    //     return `На ${index + 1} месяц`;
    // }

    return `${index + 1}`; // `На ${index + 1} месяцев`
  }

  private getWeekTitle(index) {
    // switch (index + 1) {
    //   case 1:
    //     return 'На 1 неделю';
    //   case 2:
    //   case 3:
    //   case 4:
    //     return `На ${index + 1} недели`;
    // }

    return `${index + 1}`; // `На ${index + 1} недель`
  }

  private getYearTitle(index) {
    // switch (index + 1) {
    //   case 1:
    //     return 'На 1 год';
    //   case 2:
    //   case 3:
    //   case 4:
    //     return `На ${index + 1} года`;
    // }

    return `${index + 1}`; // `На ${index + 1} лет`
  }

}
