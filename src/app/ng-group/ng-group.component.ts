import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ng-group',
  templateUrl: './ng-group.component.html',
  styleUrls: ['./ng-group.component.scss']
})
export class NgGroupComponent implements OnInit {

  form = new FormGroup({
    publicInfo: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)])
    }),
    privateInfo: new FormGroup({
      idCard: new FormControl('', Validators.required),
      mobile: new FormControl('')
    })
  });

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.value.publicInfo.name);
    console.log(this.form.value.privateInfo.idCard);
    console.log(this.form.value.privateInfo.mobile);
  }
}
