import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionTipsComponent } from './nutrition-tips.component';

describe('NutritionTipsComponent', () => {
  let component: NutritionTipsComponent;
  let fixture: ComponentFixture<NutritionTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
