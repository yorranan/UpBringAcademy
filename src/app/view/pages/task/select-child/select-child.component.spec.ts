import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChildComponent } from './select-child.component';

describe('SelectChildComponent', () => {
  let component: SelectChildComponent;
  let fixture: ComponentFixture<SelectChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectChildComponent]
    });
    fixture = TestBed.createComponent(SelectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
