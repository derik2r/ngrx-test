import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSetAddComponent } from './wheel-set-add.component';

describe('WheelSetAddComponent', () => {
  let component: WheelSetAddComponent;
  let fixture: ComponentFixture<WheelSetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
