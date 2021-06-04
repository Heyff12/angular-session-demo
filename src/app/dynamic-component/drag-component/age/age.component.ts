import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  @Input() selectedOption = 0;

  @Output() ageChange = new EventEmitter();
  options = [
    { text: '不限', value: 0 },
    { text: '0-20岁', value: 1 },
    { text: '20-30岁', value: 2 },
    { text: '30-40岁', value: 3 },
    { text: '40-55岁', value: 4 },
    { text: '55岁以上', value: 5 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value): void {
    this.selectedOption = value;
    this.ageChange.emit(value);
  }

}
