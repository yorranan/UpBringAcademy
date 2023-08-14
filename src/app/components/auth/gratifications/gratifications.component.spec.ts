import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratificationsComponent } from './gratifications.component';

describe('GratificationsComponent', () => {
  let component: GratificationsComponent;
  let fixture: ComponentFixture<GratificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GratificationsComponent]
    });
    fixture = TestBed.createComponent(GratificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
