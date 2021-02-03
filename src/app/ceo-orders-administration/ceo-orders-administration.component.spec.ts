import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoOrdersAdministrationComponent } from './ceo-orders-administration.component';

describe('CeoOrdersAdministrationComponent', () => {
  let component: CeoOrdersAdministrationComponent;
  let fixture: ComponentFixture<CeoOrdersAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeoOrdersAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeoOrdersAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
