import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGratificationComponent } from './create-gratification.component';

describe('CreateGratificationComponent', () => {
  let component: CreateGratificationComponent;
  let fixture: ComponentFixture<CreateGratificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGratificationComponent]
    });
    fixture = TestBed.createComponent(CreateGratificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
