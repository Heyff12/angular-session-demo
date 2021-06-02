import { Component, OnInit } from '@angular/core';
import { HostService } from '../../../services/host.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [ { provide: HostService, useValue: { value: 'parent hostService' }} ]
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
