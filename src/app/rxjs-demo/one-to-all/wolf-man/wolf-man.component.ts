import { Component, Input, OnInit } from '@angular/core';
import { OneToAllService, WolfMan } from '../one-to-all.service';

@Component({
  selector: 'app-wolf-man',
  templateUrl: './wolf-man.component.html',
  styleUrls: ['./wolf-man.component.scss']
})
export class WolfManComponent implements OnInit {
  @Input() wolfMan: WolfMan;
  isKilled = false;

  constructor(private service: OneToAllService) {
  }

  ngOnInit(): void {
  }

  kill(): void {
    this.service.kill(this.wolfMan);
    this.isKilled = true;
  }
}
