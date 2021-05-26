import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ng-form-builder',
  templateUrl: './ng-form-builder.component.html',
  styleUrls: ['./ng-form-builder.component.scss']
})
export class NgFormBuilderComponent implements OnInit {

  form = this.fb.group({
    publicInfo: this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(2)])
    }),
    privateInfo: this.fb.group({
      idCard: this.fb.control('', Validators.required),
      mobile: '',
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.value.publicInfo.name);
    console.log(this.form.value.privateInfo.idCard);
    console.log(this.form.value.privateInfo.mobile);
  }
}
