import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessGuidanceComponent } from './fitness-guidance.component';

describe('FitnessGuidanceComponent', () => {
  let component: FitnessGuidanceComponent;
  let fixture: ComponentFixture<FitnessGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
