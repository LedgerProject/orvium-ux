import { NgModule } from '@angular/core';
import { OrvAuthorButtonComponent } from './orv-author-button/orv-author-button.component';
import { OrvAuthorButtonMenuComponent } from './orv-author-button/orv-author-button-menu/orv-author-button-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ShowMoreComponent } from './shared/show-more/show-more.component';
import { OrvDepositCardComponent } from './orv-deposit-card/orv-deposit-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatBadgeModule } from '@angular/material/badge';
import { OrvModeratorsPanelComponent } from './orv-moderators-panel/orv-moderators-panel.component';
import { GravatarModule } from 'ngx-gravatar';
import { OrvSpinnerComponent } from './orv-spinner/orv-spinner.component';
import { SafeHtmlPipe } from './orv-spinner/safe-html.pipe';


@NgModule({
  declarations: [
    OrvAuthorButtonComponent,
    OrvAuthorButtonMenuComponent,
    ShowMoreComponent,
    OrvDepositCardComponent,
    OrvModeratorsPanelComponent,
    OrvSpinnerComponent,
    SafeHtmlPipe
  ],
  imports: [
    MatMenuModule,
    MatListModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    RouterModule,
    MatChipsModule,
    MatBadgeModule,
    GravatarModule
  ],
  exports: [OrvAuthorButtonMenuComponent, OrvAuthorButtonComponent, OrvDepositCardComponent, OrvModeratorsPanelComponent, OrvSpinnerComponent]
})
export class OrviumUxLibModule {
}
