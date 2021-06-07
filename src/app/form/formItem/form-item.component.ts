import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  filterCondition: FormGroup;
  filters = [
    {
      name: 'name',
      label: '姓名',
      placeholder: '请输入姓名',
      maxLength: 8,
      validator: [Validators.required],
    },
    {
      name: 'tel',
      label: '电话',
      placeholder: '请输入电话号码',
      maxLength: 11,
    },
    {
      name: 'address',
      label: '地址',
      defaultValue: '成都'
    }
  ];
  payLoad = '';


  constructor() { }

  ngOnInit(): void {
    const group = {}
    this.filters.forEach(filter=>{
      group[filter.name]=new FormControl(filter.defaultValue || '', filter.validator || [])
    })
    this.filterCondition = new FormGroup(group);
    console.log(this.filterCondition)
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.filterCondition.getRawValue());
  }

}
