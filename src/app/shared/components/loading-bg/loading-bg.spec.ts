import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingBg } from './loading-bg';

describe('LoadingBg', () => {
  let component: LoadingBg;
  let fixture: ComponentFixture<LoadingBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingBg],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingBg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
