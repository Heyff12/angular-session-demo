import { Component, OnInit, Optional } from '@angular/core';
import { OptionalService } from '../../../services/optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent implements OnInit {

  constructor(@Optional() private optionalService: OptionalService) { }

  ngOnInit(): void {
  }
}
