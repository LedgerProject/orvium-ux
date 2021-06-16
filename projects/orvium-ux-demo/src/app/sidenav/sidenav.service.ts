import { Injectable } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  private sidenav?: MatSidenav;

  public setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  public open(): Promise<MatDrawerToggleResult> {
    if (!this.sidenav) {
      throw new Error('Left sidenav not available');
    }
    return this.sidenav.open();
  }

  public close(): Promise<MatDrawerToggleResult> {
    if (!this.sidenav) {
      throw new Error('Left sidenav not available');
    }
    return this.sidenav.close();
  }

  public toggle(): Promise<MatDrawerToggleResult> {
    if (!this.sidenav) {
      throw new Error('Left sidenav not available');
    }
    return this.sidenav.toggle();
  }
}
