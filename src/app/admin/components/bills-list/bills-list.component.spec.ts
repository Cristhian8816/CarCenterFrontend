import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillConsultComponent } from './bills-list.component';

describe('ProductListComponent', () => {
  let component: BillConsultComponent;
  let fixture: ComponentFixture<BillConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
