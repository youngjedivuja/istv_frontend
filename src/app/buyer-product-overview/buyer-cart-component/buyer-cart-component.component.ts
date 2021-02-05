import {Component, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import {MatStepper} from '@angular/material/stepper';
import {OrderServices} from '../../../services/order-service';

@Component({
  selector: 'app-buyer-cart-component',
  templateUrl: './buyer-cart-component.component.html',
  styleUrls: ['./buyer-cart-component.component.css']
})
export class BuyerCartComponentComponent implements OnInit {
  form = new FormGroup({
    quantity: new FormControl()
  });
  orderForm = new FormGroup({
    deliveryAddress: new FormControl()
  });
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['productInfo', 'quantity'];
  @ViewChild(MatStepper, {static: false}) stepper: MatStepper;

  constructor(@Inject(MAT_DIALOG_DATA) public cart, private ngZone: NgZone, private orderService: OrderServices, private dialogRef: MatDialogRef<BuyerCartComponentComponent>) {
  }

  ngOnInit(): void {
    this.form.get('quantity').setValue(1);
    this.dataSource = this.cart.cart;
  }


  next(): void {
    this.ngZone.run(() => {
      this.stepper.next();
    });
  }

  saveOrder(): void {
    const order = {
      deliveryAddress: this.orderForm.get('deliveryAddress').value,
      products: this.cart.cart
    };
    this.orderService.saveOrderDTO(order).subscribe(data => {
    });
    this.dialogRef.close();
  }
}
