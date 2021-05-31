import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAComponent } from './shared-a.component';

describe('SharedAComponent', () => {
  let component: SharedAComponent;
  let fixture: ComponentFixture<SharedAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
