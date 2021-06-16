import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'orv-access-denied',
  templateUrl: './orv-access-denied.component.html',
  styleUrls: ['./orv-access-denied.component.scss']
})
export class OrvAccessDeniedComponent {

  @Input() title = 'Access Denied';
  @Input() subtitle = 'Unauthorized';
  @Input() message = 'Sorry, you are not authorized to access this page.';
  constructor() { }

}
