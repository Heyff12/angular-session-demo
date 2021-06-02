import { Component, Host, OnInit } from '@angular/core';
import { HostService } from '../../../services/host.service';

@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.scss'],
  providers: [{ provide: HostService, useValue: { value: 'host child component'}}]
})
export class HostChildComponent implements OnInit {

  constructor(@Host() public hostService: HostService) { }

  ngOnInit(): void {
  }

}
