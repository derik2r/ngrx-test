import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugListResultComponent } from './drug-list-result.component';

describe('DrugListResultComponent', () => {
  let component: DrugListResultComponent;
  let fixture: ComponentFixture<DrugListResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugListResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
