import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  testModel = '';

  ngOnInit(): void {
  }

  consoleLog(): void {
    console.log(this.testModel);
  }

}
