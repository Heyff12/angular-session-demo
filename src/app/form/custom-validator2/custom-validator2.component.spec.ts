import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidator2Component } from './custom-validator2.component';

describe('CustomValidator2Component', () => {
  let component: CustomValidator2Component;
  let fixture: ComponentFixture<CustomValidator2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValidator2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
