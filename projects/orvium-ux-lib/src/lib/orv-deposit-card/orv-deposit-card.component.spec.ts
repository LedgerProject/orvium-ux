import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvDepositCardComponent } from './orv-deposit-card.component';

describe('OrvDepositCardComponent', () => {
  let component: OrvDepositCardComponent;
  let fixture: ComponentFixture<OrvDepositCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrvDepositCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvDepositCardComponent);
    component = fixture.componentInstance;
    component.deposit.abstract = 'test abstract';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
