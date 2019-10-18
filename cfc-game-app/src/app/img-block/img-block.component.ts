import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
declare const getAssetsByKey: any;

@Component({
  selector: 'img-block',
  templateUrl: './img-block.component.html',
  styleUrls: ['./img-block.component.scss']
})
export class ImgBlockComponent {
  constructor(private sanitizer: DomSanitizer) {}

  sanitize() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(getAssetsByKey(environment.imageName));
  }
}
