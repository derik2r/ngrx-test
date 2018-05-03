import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSetComponent } from './wheel-set.component';

describe('WheelSetComponent', () => {
  let component: WheelSetComponent;
  let fixture: ComponentFixture<WheelSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
