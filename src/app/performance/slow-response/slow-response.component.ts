import { Component, OnInit } from '@angular/core';
import { DataService, Person } from './data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-slow-response-component',
  templateUrl: 'slow-response.component.html',
  styleUrls: ['slow-response.component.scss']
})
export class SlowResponseComponent implements OnInit {

  sortFlag = 'name';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  get persons(): Person[] {
    const persons = this.dataService.getData();
    return _.sortBy(persons, [this.sortFlag], ['asc']);
  }

  sortBy(prop: string): void {
    this.sortFlag = prop;
  }

  getSexName(sex: string): string {
    return sex === 'M' ? '男' : '女';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // this.runComplexLogic();

    return `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${days < 10 ? '0' + days : days} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  formatTelephone(phoneNumber: string): string {
    if (phoneNumber.length >= 11) {
      return phoneNumber.substr(0, 11);
    }
    return phoneNumber.padEnd(11, '0');
  }

  runComplexLogic(): void {
    for (let i = 0; i < 2; i++) {
      console.log(i);
    }
  }
}


