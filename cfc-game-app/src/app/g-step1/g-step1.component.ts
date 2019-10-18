import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
declare const getAssetsByKey: any;

@Component({
  selector: 'app-g-step1',
  templateUrl: './g-step1.component.html',
  styleUrls: ['./g-step1.component.scss']
})
export class GStep1Component implements OnInit {
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  public showHand1 = false;
  public showHand2 = false;
  public showHand3 = false;

  public environment = environment;

  ngOnInit() {
    setTimeout(() => {
      this.showHand1 = true;

      this.startShowHand();
    }, 4000);
  }

  public selected(amount) {
    this.select.emit({ amount });
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

  sanitize() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(getAssetsByKey('finger_right'));
  }
}
