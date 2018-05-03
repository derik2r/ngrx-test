import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-wheel-set-add',
  templateUrl: './wheel-set-add.component.html',
  styleUrls: ['./wheel-set-add.component.css']
})
export class WheelSetAddComponent implements OnInit {

  wheelSetAddFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.wheelSetAddFormGroup = this.fb.group({
        wheelSets: this.fb.array([
          // this.initializeWheelSet(),
        ])
    });
  }

  initializeWheelSet() {
    return this.fb.group({
      id: [''],
      code: [''],
      description: ''
    });
  }

  handleAdd() {
    const control = <FormArray>this.wheelSetAddFormGroup.controls['wheelSets'];
    control.push(this.initializeWheelSet());
  }

  handleRemove(index: number) {
    const control = <FormArray>this.wheelSetAddFormGroup.controls['wheelSets'];
    control.removeAt(index);
  }

  handleLock() {
    console.log('Lock button clicked...');
  }

  handlePush() {
    console.log('Push button clicked...');
  }

}
