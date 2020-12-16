import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingHttpComponent } from './calling-http.component';

describe('CallingHttpComponent', () => {
  let component: CallingHttpComponent;
  let fixture: ComponentFixture<CallingHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
