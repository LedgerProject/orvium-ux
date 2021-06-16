import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DepositCardComponent } from './library-components/deposit-card/deposit-card.component';
import { AuthorButtonComponent } from './library-components/author-button/author-button.component';
import { ProgressComponent } from './progress/progress.component';
import { ModeratorsPanelComponent } from './library-components/moderators-panel/moderators-panel.component';
import { ThemeOverviewComponent } from './theme-overview/theme-overview.component';
import { SpinnerComponent } from './library-components/spinner/spinner.component';
import { DepositStatusInfoComponent } from './library-components/deposit-status-info/deposit-status-info.component';
import { AccessDeniedComponent } from './library-components/access-denied/access-denied.component';

const routes: Routes = [
  { path: '', component: DepositCardComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'deposit-card', component: DepositCardComponent },
  { path: 'author-button', component: AuthorButtonComponent },
  { path: 'moderators-panel', component: ModeratorsPanelComponent },
  { path: 'theme-details', component: ThemeOverviewComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'deposit-status-info', component: DepositStatusInfoComponent },
  { path: 'progress', component: ProgressComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules,
        onSameUrlNavigation: 'reload',
        initialNavigation: 'enabledNonBlocking',
        scrollPositionRestoration: 'enabled',
        relativeLinkResolution: 'legacy'
      })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule {
}
