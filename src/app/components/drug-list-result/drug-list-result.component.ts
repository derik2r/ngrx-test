import { Component, OnInit, Input } from '@angular/core';

import { DrugList } from '../../models/drug-list.model';


@Component({
  selector: 'app-drug-list-result',
  templateUrl: './drug-list-result.component.html',
  styleUrls: ['./drug-list-result.component.scss']
})
export class DrugListResultComponent implements OnInit {

  @Input() drugListCollection: DrugList[];

  constructor() { }

  ngOnInit() {
  }

}
