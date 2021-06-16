import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorsPanelComponent } from './moderators-panel.component';

describe('ModeratorsPanelComponent', () => {
  let component: ModeratorsPanelComponent;
  let fixture: ComponentFixture<ModeratorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeratorsPanelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
