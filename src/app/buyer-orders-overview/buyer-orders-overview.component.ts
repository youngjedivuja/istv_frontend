import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {OrderServices} from '../../services/order-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CeoOrdersProductsDialogComponent} from '../ceo-orders-administration/ceo-orders-products-dialog/ceo-orders-products-dialog.component';

@Component({
  selector: 'app-buyer-orders-overview',
  templateUrl: './buyer-orders-overview.component.html',
  styleUrls: ['./buyer-orders-overview.component.css']
})
export class BuyerOrdersOverviewComponent implements OnInit {

  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = [ 'deliveryAddress', 'totalPrice', 'products'];
  orderList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderService: OrderServices, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): void {
    this.orderService.getAllOrderByBuyerId().subscribe(resOrder => {
      this.orderList = resOrder;
      this.orderList.forEach(order => {
        this.orderService.calculateTotal(order.id).subscribe(resTotal => {
          order.total = resTotal;
        });
      });
      this.dataSource.data = this.orderList;
      this.dataSource.paginator = this.paginator;
    });

  }

  openEditDialog(order: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1000px';
    dialogConfig.data = {
      id: order.id
    };
    this.dialog.open(CeoOrdersProductsDialogComponent, dialogConfig).afterClosed();
  }
}
