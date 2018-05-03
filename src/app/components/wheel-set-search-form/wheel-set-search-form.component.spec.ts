import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSetSearchFormComponent } from './wheel-set-search-form.component';

describe('WheelSetSearchFormComponent', () => {
  let component: WheelSetSearchFormComponent;
  let fixture: ComponentFixture<WheelSetSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSetSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSetSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
