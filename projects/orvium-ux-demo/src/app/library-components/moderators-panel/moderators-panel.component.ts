import { Component } from '@angular/core';

@Component({
  selector: 'app-moderators-panel',
  templateUrl: './moderators-panel.component.html',
  styleUrls: ['./moderators-panel.component.scss']
})
export class ModeratorsPanelComponent {

  htmlCode = '<orv-moderators-panel [moderators]="moderators"></orv-moderators-panel>';
  moderators: any[] = [
    {
      firstName: 'Samantha',
      lastName: 'Hudson',
      institution: 'Orvium',
      gravatar: '1870268c0d8f164238abdb2dc4630f59',
      nickname: 'samantha'
    },
    {
      firstName: 'Sergio',
      lastName: 'Navarro',
      institution: 'Orvium',
      gravatar: 'd2a026b675f95505d1c086761832d213',
      nickname: 'sergio'
    }

  ];

  constructor() {
  }

}
