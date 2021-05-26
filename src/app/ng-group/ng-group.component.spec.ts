import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGroupComponent } from './ng-group.component';

describe('NgGroupComponent', () => {
  let component: NgGroupComponent;
  let fixture: ComponentFixture<NgGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
