import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductServices} from '../../../services/product-services';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ceo-product-create',
  templateUrl: './ceo-product-create.component.html',
  styleUrls: ['./ceo-product-create.component.css']
})
export class CeoProductCreateComponent implements OnInit {
  form = new FormGroup({
    productCode: new FormControl(null, Validators.required),
    fullName: new FormControl(null, Validators.required),
    countryOfOrigin: new FormControl(null, Validators.required),
    storageQuantity: new FormControl(null, Validators.required),
  });

  constructor(private dialogRef: MatDialogRef<CeoProductCreateComponent>,
              private productService: ProductServices,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  product: any;

  ngOnInit(): void {
    if (this.data) {
      this.getProductByProductId();
      this.form.get('productCode').disable();
    }
  }

  getProductByProductId(): void {
    this.productService.getProductByProductId(this.data.id).subscribe(resProduct => {
      this.product = resProduct;
      this.form.get('productCode').setValue(this.product.productCode);
      this.form.get('fullName').setValue(this.product.fullName);
      this.form.get('countryOfOrigin').setValue(this.product.countryOfOrigin);
      this.form.get('storageQuantity').setValue(this.product.storageQuantity);
    });
  }

  saveProduct(): void {
    this.productService.saveProduct(this.product).subscribe();
    this.dialogRef.close();
  }

}
