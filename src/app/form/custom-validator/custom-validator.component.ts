import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { validValidator } from './util';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit {

  form = this.fb.group({
    publicInfo: this.fb.group({
      name: this.fb.control('', [Validators.required, validValidator(/^\w{3}$/, 'errorName')])
    }),
    privateInfo: this.fb.group({
      idCard: this.fb.control('', Validators.required),
      mobile: '',
    })
  });

  errorMobile = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.value.publicInfo.name);
    console.log(this.form.value.privateInfo.idCard);
    console.log(this.form.value.privateInfo.mobile);
    console.log(this.form.status);

    this.errorMobile = this.form.get('privateInfo.mobile').errors?.errorMobile;
  }

}
