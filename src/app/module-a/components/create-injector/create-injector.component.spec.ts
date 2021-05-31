import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInjectorComponent } from './create-injector.component';

describe('CreateInjectorComponent', () => {
  let component: CreateInjectorComponent;
  let fixture: ComponentFixture<CreateInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
