import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProductOverviewComponent } from './buyer-product-overview.component';

describe('BuyerProductOverviewComponent', () => {
  let component: BuyerProductOverviewComponent;
  let fixture: ComponentFixture<BuyerProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerProductOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
