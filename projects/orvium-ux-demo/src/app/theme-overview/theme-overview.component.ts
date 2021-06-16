import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../../../orvium-ux-lib/src/lib/shared/theme/theme.service';

export interface Typography {
  text: string;
  class: string;
  description: string;
}

const DATA: Typography[] = [
  {
    text: 'ORVIUM',
    class: 'mat-display-4',
    description: 'Unique header located at the top of the page'
  },
  {
    text: 'Orvium UX',
    class: 'mat-display-3',
    description: 'Unique header located at the top of the page'
  },
  {
    text: 'Orvium UX',
    class: 'mat-display-2',
    description: 'Unique header located at the top of the page'
  },
  {
    text: 'Orvium UX',
    class: 'mat-display-1',
    description: 'Unique header located at the top of the page'
  },
  {
    text: 'Headline',
    class: 'mat-headline',
    description: 'Section heading corresponding to tag <h1>'
  },
  {
    text: 'Headline 2',
    class: 'mat-title',
    description: 'Section heading corresponding to tag <h2>'
  },
  {
    text: 'Subheading',
    class: 'mat-subheading-2',
    description: 'Section heading corresponding to tag <h3>'
  },
  {
    text: 'Subheading 2',
    class: 'mat-subheading-1',
    description: 'Section heading corresponding to tag <h4>'
  },
  {
    text: 'Body',
    class: 'mat-body mat-body-1',
    description: 'Base body text'
  },
  {
    text: 'Body 2',
    class: 'mat-body mat-body-2',
    description: 'Bolder body text'
  },
  {
    text: 'Caption',
    class: 'mat-small .mat-caption',
    description: 'Smaller body and hint text'
  },
];

const COLORS = [
  {
    class: 'primary',
    HEX: ['\#377DFF', '\#377DFF']
  },
  {
    class: 'warn',
    HEX: ['\#FF6E40', '\#FF5252']
  },
  {
    class: 'accent',
    HEX: ['\#FFC107', '\#FF9800']
  }
];

const LOGO = [
  {
    url: 'https://assets.orvium.io/logo/orvium_logo_min.png',
    extension: 'png'
  },
  {
    url: 'https://assets.orvium.io/logo/logo.svg',
    extension: 'svg'
  },
  {
    url: 'https://assets.orvium.io/logo/orviumIcon.svg',
    extension: 'svg'
  },
  {
    url: 'https://assets.orvium.io/orvium_logo.png',
    extension: 'png'
  }
];

@Component({
  selector: 'app-theme-overview',
  templateUrl: './theme-overview.component.html',
  styleUrls: ['./theme-overview.component.scss']
})
export class ThemeOverviewComponent implements OnInit, OnDestroy {
  dataSource = DATA;
  dataColors = COLORS;
  dataLogo = LOGO;
  displayedColumns: string[] = ['text', 'class', 'description'];
  displayedColumnsColor: string[] = ['color', 'class', 'HEX'];
  displayedColumnsLogo: string[] = ['logo', 'extension', 'link'];
  isDark = false;
  themingSubscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themingSubscription = this.themeService.darkModeObservable.subscribe((isDark: boolean) => {
      this.isDark = isDark;
    });

  }

  ngOnDestroy(): void {
    this.themingSubscription.unsubscribe();
  }

}
