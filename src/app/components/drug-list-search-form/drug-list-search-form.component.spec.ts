import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugListSearchFormComponent } from './drug-list-search-form.component';

describe('DrugListSearchFormComponent', () => {
  let component: DrugListSearchFormComponent;
  let fixture: ComponentFixture<DrugListSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugListSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugListSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
