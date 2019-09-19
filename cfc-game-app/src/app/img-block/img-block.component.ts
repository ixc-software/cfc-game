import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'img-block',
  templateUrl: './img-block.component.html',
  styleUrls: ['./img-block.component.scss']
})
export class ImgBlockComponent implements OnInit {
  public imageName;
  constructor() {}

  ngOnInit() {
    this.imageName = 'assets/' + environment.imageName;
  }
}
