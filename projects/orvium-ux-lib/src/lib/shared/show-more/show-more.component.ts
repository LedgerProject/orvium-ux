import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'orv-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({})),
      state('closed', style({})),
      transition('closed <=> open', [
        style({ opacity: 0.2 }),
        animate('1s ease', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class ShowMoreComponent implements OnInit {
  @Input() text = '';
  truncateLength = 50;
  state = 'closed';
  displayText = '';
  showButtons = false;
  inputWords: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.inputWords = this.text.split(' ');
    if (this.text && this.inputWords.length > this.truncateLength) {
      this.readMore(false);
      this.showButtons = true;
    } else {
      this.readMore(true);
      this.showButtons = false;
    }
  }

  readMore(flag: boolean): void {
    if (flag) {
      this.state = 'open';
      this.displayText = this.text;
    } else {
      this.state = 'closed';
      this.displayText = this.inputWords.slice(0, this.truncateLength).join(' ') + '...';
    }
  }
}
