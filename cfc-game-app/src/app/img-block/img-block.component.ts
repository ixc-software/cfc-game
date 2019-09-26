import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { dataBase64 } from '../data-base64';

@Component({
  selector: 'img-block',
  templateUrl: './img-block.component.html',
  styleUrls: ['./img-block.component.scss']
})
export class ImgBlockComponent {
  constructor(private sanitizer: DomSanitizer) {}

  sanitize() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(dataBase64().dataBase64.assets[environment.imageName]);
  }
}
