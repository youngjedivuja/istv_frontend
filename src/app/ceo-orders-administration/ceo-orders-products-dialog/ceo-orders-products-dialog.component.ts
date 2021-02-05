import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderServices} from '../../../services/order-service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-ceo-orders-products-dialog',
  templateUrl: './ceo-orders-products-dialog.component.html',
  styleUrls: ['./ceo-orders-products-dialog.component.css']
})
export class CeoOrdersProductsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CeoOrdersProductsDialogComponent>,
              private orderService: OrderServices,
              @Inject(MAT_DIALOG_DATA) public data) {

  }

  displayedColumns: string[] = ['productInfo', 'quantity', 'price'];
  dataSource = new MatTableDataSource([]);
  orderProductList;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getAllOrderProducts();
    this.orderProductList = localStorage.getItem('korpa');
  }

  getAllOrderProducts(): void {
    this.orderService.getAllOrderProductsByOrderId(this.data.id).subscribe(resOrderProducts => {
      this.orderProductList = resOrderProducts;
      this.dataSource.data = this.orderProductList;
      this.dataSource.paginator = this.paginator;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
