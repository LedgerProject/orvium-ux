import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DEPOSIT_STATUS } from '../model/api';

export enum STATUS_CLASSES {
  active = 'step active',
  completed = 'step completed',
  notCompleted = 'step notCompleted'
}

@Component({
  selector: 'orv-deposit-status-info',
  templateUrl: './orv-deposit-status-info.component.html',
  styleUrls: ['./orv-deposit-status-info.component.scss']
})

export class OrvDepositStatusInfoComponent implements OnInit, OnChanges {

  @Input() status: DEPOSIT_STATUS = DEPOSIT_STATUS.draft;

  DEPOSIT_STATUS = DEPOSIT_STATUS;
  statusClasses: string[];

  constructor() {
    this.statusClasses = [STATUS_CLASSES.notCompleted, STATUS_CLASSES.notCompleted, STATUS_CLASSES.notCompleted, STATUS_CLASSES.notCompleted];
  }

  ngOnInit(): void {
    this.setClasses(this.status);
  }

  ngOnChanges(): void {
    this.setClasses(this.status);
  }

  setClasses(status: string): void {
    this.statusClasses = [STATUS_CLASSES.notCompleted, STATUS_CLASSES.notCompleted, STATUS_CLASSES.notCompleted, STATUS_CLASSES.notCompleted];
    switch (status) {
      case DEPOSIT_STATUS.draft: {
        this.statusClasses[0] = STATUS_CLASSES.active;
        break;
      }
      case DEPOSIT_STATUS.pendingApproval : {
        this.statusClasses[0] = STATUS_CLASSES.completed;
        this.statusClasses[1] = STATUS_CLASSES.active;
        break;
      }
      case DEPOSIT_STATUS.preprint : {
        this.statusClasses[0] = STATUS_CLASSES.completed;
        this.statusClasses[1] = STATUS_CLASSES.completed;
        this.statusClasses[2] = STATUS_CLASSES.active;
        break;
      }
      case DEPOSIT_STATUS.published : {
        this.statusClasses[0] = STATUS_CLASSES.completed;
        this.statusClasses[1] = STATUS_CLASSES.completed;
        this.statusClasses[2] = STATUS_CLASSES.completed;
        this.statusClasses[3] = STATUS_CLASSES.active;
        break;
      }
    }
  }
}
