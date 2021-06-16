import { Component, Input } from '@angular/core';
import { Author } from '../model/orvium-ux-model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'orv-author-button',
  templateUrl: './orv-author-button.component.html',
  styleUrls: ['./orv-author-button.component.scss']
})
export class OrvAuthorButtonComponent {
  @Input() author: Author = new Author();
  @Input() showMenu = true;

  constructor() {
  }

}
