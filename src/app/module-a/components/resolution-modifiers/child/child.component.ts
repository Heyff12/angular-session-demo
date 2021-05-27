import { Component, Host, OnInit, Self, SkipSelf } from '@angular/core';
import { SelfService } from '../../../services/self.service';
import { SkipSelfService } from '../../../services/skip-self.service';
import { HostService } from '../../../services/host.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [
    { provide: SelfService, useValue: { value: 'child selfService' }},
    { provide: SkipSelfService, useValue: { value: 'child skipSelfService' }}
    ]
})
export class ChildComponent implements OnInit {

  constructor(@Self() public selfService: SelfService,
              @SkipSelf() public skipSelfService: SkipSelfService,
              @Host() public hostService: HostService) { }

  ngOnInit(): void {
  }
}
