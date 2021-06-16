import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvAccessDeniedComponent } from './orv-access-denied.component';

describe('OrvAccessDeniedComponent', () => {
  let component: OrvAccessDeniedComponent;
  let fixture: ComponentFixture<OrvAccessDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrvAccessDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
