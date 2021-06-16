import { Component, OnInit } from '@angular/core';
import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../../../orvium-ux-lib/src/lib/shared/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'orvium-ux-test';
  altTheme = false;

  constructor(private faIconLibrary: FaIconLibrary,
              public overlayContainer: OverlayContainer,
              private themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.faIconLibrary.addIcons(
      faOrcid
    );

  }

  changeTheme(altTheme: boolean): void {
    this.themeService.setDarkMode(altTheme);
  }

}
