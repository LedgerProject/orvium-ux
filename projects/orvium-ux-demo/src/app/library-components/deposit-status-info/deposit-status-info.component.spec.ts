import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositStatusInfoComponent } from './deposit-status-info.component';

describe('DepositStatusInfoComponent', () => {
  let component: DepositStatusInfoComponent;
  let fixture: ComponentFixture<DepositStatusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositStatusInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositStatusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
