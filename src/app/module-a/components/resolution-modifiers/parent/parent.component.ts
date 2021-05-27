import { Component, OnInit } from '@angular/core';
import { SelfService } from '../../../services/self.service';
import { SkipSelfService } from '../../../services/skip-self.service';
import { HostService } from '../../../services/host.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [
    { provide: SelfService, useValue: { value: 'parent selfService' }},
    { provide: SkipSelfService, useValue: { value: 'parent skipSelfService' }},
    { provide: HostService, useValue: { value: 'parent hostService' }},
    ],
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
