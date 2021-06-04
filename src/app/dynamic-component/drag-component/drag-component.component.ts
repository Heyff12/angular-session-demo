import {
  Component,
  Injector,
  OnInit, ReflectiveInjector, SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { HobbyComponent } from './hobby/hobby.component';
import { RegionComponent } from './region/region.component';
import { DynamicCreateComponentService, TOKEN } from '../services/dynamic-create-component.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drag-component',
  templateUrl: './drag-component.component.html',
  styleUrls: ['./drag-component.component.scss']
})
export class DragComponentComponent implements OnInit {

  @ViewChild('containerRef', { static: false, read: ViewContainerRef }) containerRef: ViewContainerRef;


  formGroup = new FormGroup({
    line: new FormArray([new FormControl(0), new FormControl(0), new FormControl(0), new FormControl(0)])
  });
  injector: Injector;
  keyMapperViewRef = {

  } as any;

  config = [
    {
      componentName: '年龄',
      component: AgeComponent,
      key: 'age',
      addEventListener: (instance) => {
        instance.ageChange.subscribe(value => {
          console.log(value, '11111111');
        });
      }
    },
    {
      componentName: '性别',
      component: GenderComponent,
      key: 'gender',
    },
    {
      componentName: '爱好',
      component: HobbyComponent,
      key: 'hobby',
    },
    {
      componentName: '地域',
      component: RegionComponent,
      key: 'region',
    }
  ];
  constructor(private dynamicCreateComponentService: DynamicCreateComponentService,
              private injector1: Injector,
              @SkipSelf() private parentInjector: Injector) {
    this.dynamicCreateComponentService.setRootViewContainer(this.containerRef);
    // this.injector = Injector.create({
    //   providers: [ { provide: TOKEN, useValue: '123456789' }],
    //   parent: this.parentInjector
    // });
  }

  ngOnInit(): void {
  }

  addComponent({ component, key, addEventListener}): void {
    if (!this.keyMapperViewRef[key]) {
      // const componentRef = this.dynamicCreateComponentService
      const componentRef = this.dynamicCreateComponentService
        .appendComponent(component, { selectedOption: 1 }, this.containerRef);
      this.keyMapperViewRef[key] = componentRef.hostView;
      if (addEventListener) {
        addEventListener(componentRef.instance);
      }
    }
  }

  removeComponent(key): void {
    const index = this.containerRef.indexOf(this.keyMapperViewRef[key]);
    this.containerRef.remove(index);
    this.keyMapperViewRef[key] = null;
  }

  moveComponent(data, index): void {
    console.log(this.formGroup.value);
    this.containerRef.move(this.keyMapperViewRef[data.key], this.formGroup.value.line[index]);
  }

}
