import { Component, Input, OnInit } from '@angular/core';
import { AuthorDTO } from '../../model/api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'orv-author-button-menu',
  templateUrl: './orv-author-button-menu.component.html',
  styleUrls: ['./orv-author-button-menu.component.scss']
})
export class OrvAuthorButtonMenuComponent implements OnInit {
  @Input() author: AuthorDTO = new AuthorDTO();


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.author);
  }
}
