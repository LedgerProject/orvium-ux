import { Component, OnInit } from '@angular/core';
import { OrvSpinnerService } from 'orvium-ux-lib';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  htmlCode = '<button mat-raised-button (click)="activateSpinner(\'buttonSpinner\')">\n' +
    '      <orv-spinner name="buttonSpinner" [fullScreen]="false"></orv-spinner>\n' +
    '      Activate spinner\n' +
    '</button>';
  tsCode = 'export class SpinnerComponent implements OnInit {\n' +
    'constructor(private spinnerService: OrvSpinnerService) { }\n' +
    'activateSpinner(spinnerName: string): void {\n' +
    '    this.spinnerService.show(spinnerName);\n' +
    '    this.spinnerService.hide(spinnerName, 3000);\n' +
    '  }';
  htmlCode2 = '<orv-spinner name="screenSpinner" bdColor="rgba(51,51,51,0.5)" size="medium" color="#377dff"\n' +
    'type="ball-clip-rotate" [fullScreen]="true">\n' +
    '</orv-spinner>';
  tsCode2 = 'export class SpinnerComponent implements OnInit {\n' +
    'constructor(private spinnerService: OrvSpinnerService) { }\n' +
    ' activateSpinner(spinnerName: string): void {\n' +
    '    this.spinnerService.show(spinnerName);\n' +
    '    this.spinnerService.hide(spinnerName, 3000);\n' +
    '  }';

  constructor(private spinnerService: OrvSpinnerService) {
  }

  ngOnInit(): void {
    this.spinnerService.show();
  }

  activateSpinner(spinnerName: string): void {
    this.spinnerService.show(spinnerName);
    this.spinnerService.hide(spinnerName, 3000);
  }
}
