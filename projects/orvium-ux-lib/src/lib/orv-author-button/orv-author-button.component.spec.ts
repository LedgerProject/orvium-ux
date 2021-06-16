import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrvAuthorButtonComponent } from './orv-author-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

describe('OrvAuthorButtonComponent', () => {
  let component: OrvAuthorButtonComponent;
  let fixture: ComponentFixture<OrvAuthorButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrvAuthorButtonComponent],
      imports: [MatMenuModule,
        MatDividerModule,
        MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrvAuthorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
