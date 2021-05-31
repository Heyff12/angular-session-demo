import { Component, OnInit } from '@angular/core';
import { AService } from '../../../../shared/services/a.service';

@Component({
  selector: 'app-for-child',
  templateUrl: './for-child.component.html',
  styleUrls: ['./for-child.component.scss']
})
export class ForChildComponent implements OnInit {

  constructor(public aService: AService) { }

  ngOnInit(): void {
  }

}
