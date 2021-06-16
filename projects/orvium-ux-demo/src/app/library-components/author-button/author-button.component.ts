import { Component } from '@angular/core';
import { Author, CREDIT_TYPE } from '../../../app-model';

@Component({
  selector: 'app-author-button',
  templateUrl: './author-button.component.html',
  styleUrls: ['./author-button.component.scss']
})
export class AuthorButtonComponent {
  htmlCode1 = '<orv-author-button [author]="author" [showMenu]=true></orv-author-button>';
  htmlCode2 = '<orv-author-button [author]="author" [showMenu]=true>\n' +
    '            <ng-container author-action-list>\n' +
    '                <div align="center">\n' +
    '                    <button mat-button>\n' +
    '                        <mat-icon matLine>person_add</mat-icon>\n' +
    '                        <span>Follow</span>\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </ng-container>\n' +
    '        </orv-author-button>';
  tsCode = ' author: Author = {\n' +
    '    name: \'Sergio\',\n' +
    '    surname: \'Rodriguez\',\n' +
    '    email: \'example@orvium.io\',\n' +
    '    orcid: \'https://orcid.org/0000-0000-0000-0000\',\n' +
    '    credit: [CREDIT_TYPE.conceptualization, CREDIT_TYPE.formalAnalysis]\n' +
    '  };';
  author: Author = {
    name: 'Sergio',
    surname: 'Rodriguez',
    email: 'example@orvium.io',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
    credit: [CREDIT_TYPE.conceptualization, CREDIT_TYPE.formalAnalysis]
  };

  constructor() {
  }

}
