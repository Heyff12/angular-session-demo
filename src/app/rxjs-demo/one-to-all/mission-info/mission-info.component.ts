import { Component, Input, OnInit } from '@angular/core';
import { OneToAllService } from '../one-to-all.service';

@Component({
  selector: 'app-mission-info',
  templateUrl: './mission-info.component.html',
  styleUrls: ['./mission-info.component.scss']
})
export class MissionInfoComponent implements OnInit {
  count = 0;
  @Input() totalCount = 0;

  constructor(private service: OneToAllService) {
  }

  ngOnInit(): void {
    this.service.onKill().subscribe(() => {
      this.count++;
    });
  }

}
