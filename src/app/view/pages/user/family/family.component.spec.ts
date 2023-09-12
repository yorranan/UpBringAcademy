import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyComponent } from './family.component';

describe('FamilyComponent', () => {
  let component: FamilyComponent;
  let fixture: ComponentFixture<FamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyComponent]
    });
    fixture = TestBed.createComponent(FamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
