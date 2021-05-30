import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRegistryComponent } from './service-registry.component';

describe('ServiceRegistryComponent', () => {
  let component: ServiceRegistryComponent;
  let fixture: ComponentFixture<ServiceRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
