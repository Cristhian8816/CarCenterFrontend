import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPatientComponent } from './form-patient.component';

describe('FormProductComponent', () => {
  let component: FormPatientComponent;
  let fixture: ComponentFixture<FormPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
