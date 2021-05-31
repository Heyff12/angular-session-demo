import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForChildComponent } from './for-child.component';

describe('ForChildComponent', () => {
  let component: ForChildComponent;
  let fixture: ComponentFixture<ForChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
