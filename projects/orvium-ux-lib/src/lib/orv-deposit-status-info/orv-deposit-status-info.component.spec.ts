import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvDepositStatusInfoComponent } from './orv-deposit-status-info.component';

describe('OrvDepositStatusInfoComponent', () => {
  let component: OrvDepositStatusInfoComponent;
  let fixture: ComponentFixture<OrvDepositStatusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrvDepositStatusInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvDepositStatusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
