import { Component, OnInit } from '@angular/core';
import { SelfService } from '../../../services/self.service';
import { SkipSelfService } from '../../../services/skip-self.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  providers: [
    { provide: SelfService, useValue: { value: 'parent selfService' }},
    { provide: SkipSelfService, useValue: { value: 'parent skipSelfService' }},
    ],
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
