import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenizationComponent } from './tokenization.component';

describe('TokenizationComponent', () => {
  let component: TokenizationComponent;
  let fixture: ComponentFixture<TokenizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenizationComponent]
    });
    fixture = TestBed.createComponent(TokenizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
