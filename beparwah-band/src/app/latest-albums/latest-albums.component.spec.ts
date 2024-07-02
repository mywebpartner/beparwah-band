import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAlbumsComponent } from './latest-albums.component';

describe('LatestAlbumsComponent', () => {
  let component: LatestAlbumsComponent;
  let fixture: ComponentFixture<LatestAlbumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestAlbumsComponent]
    });
    fixture = TestBed.createComponent(LatestAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
