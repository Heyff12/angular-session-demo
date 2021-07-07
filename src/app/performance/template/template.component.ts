import { Component, OnInit } from '@angular/core';
import { DataService, Person } from './data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-template-component',
  templateUrl: 'template.component.html',
  styleUrls: ['template.component.scss']
})
export class TemplateComponent implements OnInit {

  sortFlag = 'name';

  constructor(private dataService: DataService) {
  }

  // persons: Person[];
  //
  // ngOnInit(): void {
  //   this.persons = this.dataService.getData();
  // }
  //
  // sortBy(prop: string): void {
  //   this.sortFlag = prop;
  //   this.persons = _.sortBy(this.persons, [this.sortFlag], ['asc']);
  // }

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

    return `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${days < 10 ? '0' + days : days} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  formatTelephone(phoneNumber: string): string {
    if (phoneNumber.length >= 11) {
      return phoneNumber.substr(0, 11);
    }
    return phoneNumber.padEnd(11, '0');
  }
}


