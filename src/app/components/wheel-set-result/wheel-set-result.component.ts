import { Component, OnInit, Input } from '@angular/core';

import { WheelSet } from '../../models/wheel-set.model';


@Component({
  selector: 'app-wheel-set-result',
  templateUrl: './wheel-set-result.component.html',
  styleUrls: ['./wheel-set-result.component.scss']
})
export class WheelSetResultComponent implements OnInit {

  @Input() wheelSetCollection: WheelSet[];

  constructor() { }

  ngOnInit() {
  }

}
