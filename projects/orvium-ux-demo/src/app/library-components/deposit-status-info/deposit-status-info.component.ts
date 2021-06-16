import { Component } from '@angular/core';
import { DEPOSIT_STATUS } from '../../../../../orvium-ux-lib/src/lib/model/api';
import { DEPOSIT_STATUS_LOV } from '../../../../../orvium-ux-lib/src/lib/model/orvium-ux-model';

@Component({
  selector: 'app-deposit-status-info',
  templateUrl: './deposit-status-info.component.html',
  styleUrls: ['./deposit-status-info.component.scss']
})
export class DepositStatusInfoComponent {

  DEPOSIT_STATUS = DEPOSIT_STATUS;
  status: DEPOSIT_STATUS = DEPOSIT_STATUS.draft;
  DEPOSIT_STATUS_LOV = DEPOSIT_STATUS_LOV;
  htmlCode = '<orv-deposit-status-info [status]="status"></orv-deposit-status-info>';

  constructor() {
    this.DEPOSIT_STATUS_LOV.splice(3, 1);
  }

}
