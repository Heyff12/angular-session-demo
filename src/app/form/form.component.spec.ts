import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './form.component';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule, platformBrowserDynamicTesting()
);

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value of the input field', () => {
    const input = fixture.nativeElement.querySelector('.zishiying');
    console.log(input)
    // const event = document.createEvent('input');
    const event = new Event('input', {
      bubbles: true,
      cancelable: true,
    });

    input.value = 'Red';
    input.dispatchEvent(event);
    console.log(input)

    expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
  });

  it('should update the value in the control', () => {
    component.favoriteColorControl.setValue('Blue');

    const input = fixture.nativeElement.querySelector('.zishiying');

    expect(input.value).toBe('Blue');
  });

  it('should update the favorite color in the component', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('.muban');
    // const event = createNewEvent('input');
    const event = new Event('input', {
      bubbles: true,
      cancelable: true,
    });

    input.value = 'Red';
    input.dispatchEvent(event);

    fixture.detectChanges();

    expect(component.favoriteColor).toEqual('Red');
  }));

  it('should update the favorite color on the input field', fakeAsync(() => {
    component.favoriteColor = 'Blue';

    fixture.detectChanges();

    tick();

    const input = fixture.nativeElement.querySelector('.muban');

    expect(input.value).toBe('Blue');
  }));
});


// function createNewEvent(arg0: string) {
//   throw new Error('Function not implemented.');
// }

