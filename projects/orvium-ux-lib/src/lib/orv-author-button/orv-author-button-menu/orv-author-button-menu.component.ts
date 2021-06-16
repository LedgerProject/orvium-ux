import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../model/orvium-ux-model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'orv-author-button-menu',
  templateUrl: './orv-author-button-menu.component.html',
  styleUrls: ['./orv-author-button-menu.component.scss']
})
export class OrvAuthorButtonMenuComponent implements OnInit {
  @Input() author: Author = new Author();


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.author);
  }
}
