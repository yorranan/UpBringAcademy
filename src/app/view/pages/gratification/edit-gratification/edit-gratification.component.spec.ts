import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGratificationComponent } from './edit-gratification.component';

describe('EditGratificationComponent', () => {
  let component: EditGratificationComponent;
  let fixture: ComponentFixture<EditGratificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGratificationComponent]
    });
    fixture = TestBed.createComponent(EditGratificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
