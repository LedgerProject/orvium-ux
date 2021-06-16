import { OrvSpinnerComponent } from './orv-spinner.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SpinnerComponent', () => {
  let component: OrvSpinnerComponent;
  let fixture: ComponentFixture<OrvSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrvSpinnerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
