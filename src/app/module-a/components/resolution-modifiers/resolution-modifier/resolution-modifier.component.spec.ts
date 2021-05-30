import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionModifierComponent } from './resolution-modifier.component';

describe('ResolutionModifierComponent', () => {
  let component: ResolutionModifierComponent;
  let fixture: ComponentFixture<ResolutionModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
