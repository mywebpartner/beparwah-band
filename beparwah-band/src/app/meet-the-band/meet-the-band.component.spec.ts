import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheBandComponent } from './meet-the-band.component';

describe('MeetTheBandComponent', () => {
  let component: MeetTheBandComponent;
  let fixture: ComponentFixture<MeetTheBandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetTheBandComponent]
    });
    fixture = TestBed.createComponent(MeetTheBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
