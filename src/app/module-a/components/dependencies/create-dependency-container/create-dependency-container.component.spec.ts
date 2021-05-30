import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDependencyContainerComponent } from './create-dependency-container.component';

describe('CreateDependencyContainerComponent', () => {
  let component: CreateDependencyContainerComponent;
  let fixture: ComponentFixture<CreateDependencyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDependencyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDependencyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
