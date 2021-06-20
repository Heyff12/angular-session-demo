import { Component, OnInit } from '@angular/core';
import { OneToAllService } from '../one-to-all.service';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  equipments: Array<string>;

  constructor(private service: OneToAllService) {
  }

  ngOnInit(): void {
    this.equipments = [];
    this.service.onKill().pipe(
      filter(wolfMan => wolfMan.equipment != null)
    ).subscribe(wolfMan => {
      this.equipments.push(wolfMan.equipment);
    });
  }

}
