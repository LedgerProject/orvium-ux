import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { DepositCardComponent } from './library-components/deposit-card/deposit-card.component';
import { RoutingModule } from './routing.module';
import { AuthorButtonComponent } from './library-components/author-button/author-button.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { ProgressComponent } from './progress/progress.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { ModeratorsPanelComponent } from './library-components/moderators-panel/moderators-panel.component';
import { OrviumUxLibModule, ThemeService } from 'orvium-ux-lib';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeOverviewComponent } from './theme-overview/theme-overview.component';
import { MatTableModule } from '@angular/material/table';
import { SpinnerComponent } from './library-components/spinner/spinner.component';
import { DepositStatusInfoComponent } from './library-components/deposit-status-info/deposit-status-info.component';
import { MatSelectModule } from '@angular/material/select';
import { AccessDeniedComponent } from './library-components/access-denied/access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    FooterComponent,
    DepositCardComponent,
    AuthorButtonComponent,
    ProgressComponent,
    ModeratorsPanelComponent,
    ThemeOverviewComponent,
    SpinnerComponent,
    DepositStatusInfoComponent,
    SpinnerComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    OrviumUxLibModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    MatChipsModule,
    MatToolbarModule,
    RoutingModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    HighlightModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    },
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
