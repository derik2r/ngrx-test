import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSetResultComponent } from './wheel-set-result.component';

describe('WheelSetResultComponent', () => {
  let component: WheelSetResultComponent;
  let fixture: ComponentFixture<WheelSetResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSetResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
