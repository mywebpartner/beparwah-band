import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFormsComponent } from './live-forms.component';

describe('LiveFormsComponent', () => {
  let component: LiveFormsComponent;
  let fixture: ComponentFixture<LiveFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveFormsComponent]
    });
    fixture = TestBed.createComponent(LiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
