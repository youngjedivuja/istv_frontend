import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoEmployeeViewComponent } from './ceo-employee-view.component';

describe('CeoEmployeeViewComponent', () => {
  let component: CeoEmployeeViewComponent;
  let fixture: ComponentFixture<CeoEmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoEmployeeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
