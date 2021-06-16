import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvModeratorsPanelComponent } from './orv-moderators-panel.component';

describe('OrvModeratorsPanelComponent', () => {
  let component: OrvModeratorsPanelComponent;
  let fixture: ComponentFixture<OrvModeratorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrvModeratorsPanelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvModeratorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
