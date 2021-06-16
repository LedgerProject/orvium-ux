import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DEPOSIT_STATUS } from '../model/orvium-ux-model';
import { DepositDTO } from '../model/api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'orv-deposit-card',
  templateUrl: './orv-deposit-card.component.html',
  styleUrls: ['./orv-deposit-card.component.scss'],
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
export class OrvDepositCardComponent implements OnInit {
  @Input() deposit: DepositDTO = new DepositDTO();
  truncateLength = 50;
  state = 'closed';
  displayText = '';
  showButtons = false;
  inputWords: string[] = [];
  DEPOSIT_STATUS = DEPOSIT_STATUS;

  constructor() {
  }

  ngOnInit(): void {
    this.inputWords = this.deposit.abstract.split(' ');
    if (this.deposit.abstract && this.inputWords.length > this.truncateLength) {
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
      this.displayText = this.deposit.abstract;
    } else {
      this.state = 'closed';
      this.displayText = this.inputWords.slice(0, this.truncateLength).join(' ') + '...';
    }
  }

}
