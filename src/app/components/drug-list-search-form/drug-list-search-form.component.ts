import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-drug-list-search-form',
  templateUrl: './drug-list-search-form.component.html',
  styleUrls: ['./drug-list-search-form.component.scss']
})
export class DrugListSearchFormComponent implements OnInit {

  @Input() searchTerms: string[];
  @Output() onSearch = new EventEmitter<string[]>();

  drugListSearchFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.drugListSearchFormGroup = this.fb.group({
      name: this.searchTerms ? this.searchTerms[0] : '',
      description: this.searchTerms ? this.searchTerms[1] : ''
    });
  }

  handleSearch() {
    const searchName = this.drugListSearchFormGroup.get('name').value;
    const searchDescription = this.drugListSearchFormGroup.get('description').value;
    console.log('CHILD - call handleSearch() with search params as [' + searchName + ' AND ' + searchDescription + ']');
    this.onSearch.emit([searchName, searchDescription]);
  }

}
