import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerOrdersOverviewComponent } from './buyer-orders-overview.component';

describe('BuyerOrdersOverviewComponent', () => {
  let component: BuyerOrdersOverviewComponent;
  let fixture: ComponentFixture<BuyerOrdersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerOrdersOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerOrdersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
