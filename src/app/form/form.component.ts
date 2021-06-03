import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  favoriteColorControl = new FormControl('');
  favoriteColor = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void {
    console.log('--------------------ngOnChanges-------------------------------')
  }

}
