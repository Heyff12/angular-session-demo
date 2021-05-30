import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserTestService } from '../../../services/user-test.service';

@Component({
  selector: 'app-create-dependency-container',
  templateUrl: './create-dependency-container.component.html',
  styleUrls: ['./create-dependency-container.component.scss']
})
export class CreateDependencyContainerComponent implements OnInit {

  constructor(public userService: UserService,
              public userTestService: UserTestService) { }

  ngOnInit(): void {
  }

}
