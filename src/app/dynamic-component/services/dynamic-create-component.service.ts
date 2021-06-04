import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable, InjectionToken,
  Injector, Type, ViewContainerRef
} from '@angular/core';

export const TOKEN = new InjectionToken('123123123');
@Injectable({ providedIn: 'root' })
export class DynamicCreateComponentService {
  private container: ComponentRef<any>;

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
  }

  setRootViewContainer(container): void {
    this.container = container;
  }

  setComponentInputs(component: ComponentRef<any>, options: any, inputProps): ComponentRef<any> {
    const inputPropsKey = inputProps.map(prop => prop.propName);
    if (options) {
      const props = Object.getOwnPropertyNames(options);
      for (const prop of props) {
        if (inputPropsKey.includes(prop)) {
          component.instance[prop] = options[prop];
        }
      }
    }
    return component;
  }

  createComponent<T>(componentClass: Type<T>, options: any = {}): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const inputProps = componentFactory.inputs;
    const componentRef = componentFactory.create(this.injector);
    this.setComponentInputs(componentRef, options, inputProps);
    return componentRef;
  }

  appendComponent<T>(
    componentClass: Type<T>,
    options: any = {},
    viewContainerRef: ViewContainerRef): ComponentRef<any> {
    const componentRef = this.createComponent(componentClass, options);
    viewContainerRef.insert(componentRef.hostView);
    return componentRef;
  }

  appendComponentByContainerRefApi<T>(
    componentClass: Type<T>,
    options: any = {},
    viewContainerRef: ViewContainerRef): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const inputProps = componentFactory.inputs;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.setComponentInputs(componentRef, options, inputProps);
    return componentRef;
  }

  appendComponentToRoot<T>( componentClass: Type<T>,
                            options: any = {}): ComponentRef<any> {
    const componentRef = this.createComponent(componentClass, options);
    this.applicationRef.attachView(componentRef.hostView);
    return componentRef;
  }

}

