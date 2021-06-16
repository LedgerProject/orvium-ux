import { Component, Input } from '@angular/core';

@Component({
  selector: 'orv-moderators-panel',
  templateUrl: './orv-moderators-panel.component.html',
  styleUrls: ['./orv-moderators-panel.component.scss']
})
export class OrvModeratorsPanelComponent {

  @Input() moderators: any[] = [];

  constructor() {
  }

}
