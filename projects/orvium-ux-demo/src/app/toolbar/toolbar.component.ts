import { Component, EventEmitter, Output } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() altTheme: EventEmitter<boolean> = new EventEmitter<boolean>();
  alternativeTheme = false;

  constructor(private sidenavService: SidenavService) {
  }

  changeTheme(): void {
    this.alternativeTheme = !this.alternativeTheme;
    this.altTheme.emit(this.alternativeTheme);
  }

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }

}
