import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  testControl = new FormControl('');

  ngOnInit(): void {
  }

  consoleLog(): void {
    console.log(this.testControl.value);
  }
}
