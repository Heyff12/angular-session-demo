import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefChildComponent } from './template-ref-child.component';

describe('TemplateRefChildComponent', () => {
  let component: TemplateRefChildComponent;
  let fixture: ComponentFixture<TemplateRefChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateRefChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
