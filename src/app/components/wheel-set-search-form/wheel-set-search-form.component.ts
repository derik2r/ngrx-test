import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-wheel-set-search-form',
  templateUrl: './wheel-set-search-form.component.html',
  styleUrls: ['./wheel-set-search-form.component.scss']
})
export class WheelSetSearchFormComponent implements OnInit {

  @Input() searchTerms: string[];
  @Output() onSearch = new EventEmitter<string[]>();

  wheelSetSearchFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.wheelSetSearchFormGroup = this.fb.group({
      name: this.searchTerms ? this.searchTerms[0] : '',
      description: this.searchTerms ? this.searchTerms[1] : ''
    });
  }

  handleSearch() {
    const searchName = this.wheelSetSearchFormGroup.get('name').value;
    const searchDescription = this.wheelSetSearchFormGroup.get('description').value;
    console.log('CHILD - call handleSearch() with search params as [' + searchName + ' AND ' + searchDescription + ']');
    this.onSearch.emit([searchName, searchDescription]);
  }

}
