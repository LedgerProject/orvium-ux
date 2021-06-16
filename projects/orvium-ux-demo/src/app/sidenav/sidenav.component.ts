import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav?: MatSidenav;
  smallScreen = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              public breakpointObserver: BreakpointObserver,
              private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    if (this.sidenav) {
      this.sidenavService.setSidenav(this.sidenav);
    }
    this.breakpointObserver.observe('(max-width: 768px)')
      .subscribe(result => {
        console.log('screen', result);
        this.smallScreen = result.matches;
      });

    if (!this.smallScreen) {
      this.toggleSidenav();
    }
  }

  resetPosition(): void {
    const content = this.document.getElementById('sidenav-content');
    if (content) {
      content.scrollTop = 0;
    }
  }

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

  closeSidenav(): void {
    if (this.smallScreen) {
      this.sidenavService.close();
    }
  }
}
