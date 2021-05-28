import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-validator2',
  templateUrl: './custom-validator2.component.html',
  styleUrls: ['./custom-validator2.component.scss']
})
export class CustomValidator2Component implements OnInit {
  testModel = '';
  // mobile;

  ngOnInit(): void {
  }

  consoleLog(): void {
    console.log(this.testModel);
    // console.log(this.mobile);
  }

}
