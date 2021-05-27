import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.scss']
})
export class PreloadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('preloading component!!!');
  }

}
