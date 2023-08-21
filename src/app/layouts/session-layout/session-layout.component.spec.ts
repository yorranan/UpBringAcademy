import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLayoutComponent } from './session-layout.component';

describe('SessionLayoutComponent', () => {
  let component: SessionLayoutComponent;
  let fixture: ComponentFixture<SessionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionLayoutComponent]
    });
    fixture = TestBed.createComponent(SessionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
