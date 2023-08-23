import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratificationComponent } from './gratification.component';

describe('GratificationComponent', () => {
  let component: GratificationComponent;
  let fixture: ComponentFixture<GratificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GratificationComponent]
    });
    fixture = TestBed.createComponent(GratificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
