import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGroupComponent } from './step-group.component';

describe('StepGroupComponent', () => {
  let component: StepGroupComponent;
  let fixture: ComponentFixture<StepGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepGroupComponent]
    });
    fixture = TestBed.createComponent(StepGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
