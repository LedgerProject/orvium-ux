import { Component, Input } from '@angular/core';
import { AuthorDTO } from '../model/api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'orv-author-button',
  templateUrl: './orv-author-button.component.html',
  styleUrls: ['./orv-author-button.component.scss']
})
export class OrvAuthorButtonComponent {
  @Input() author: AuthorDTO = new AuthorDTO();
  @Input() showMenu = true;

  constructor() {
  }

}
