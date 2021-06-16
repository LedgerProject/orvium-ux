import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvAuthorButtonMenuComponent } from './orv-author-button-menu.component';

describe('OrvAuthorButtonMenuComponent', () => {
  let component: OrvAuthorButtonMenuComponent;
  let fixture: ComponentFixture<OrvAuthorButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrvAuthorButtonMenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvAuthorButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
