import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {OrderServices} from '../../services/order-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CeoOrdersProductsDialogComponent} from './ceo-orders-products-dialog/ceo-orders-products-dialog.component';

@Component({
  selector: 'app-ceo-orders-administration',
  templateUrl: './ceo-orders-administration.component.html',
  styleUrls: ['./ceo-orders-administration.component.css']
})
export class CeoOrdersAdministrationComponent implements OnInit {
  total: any;
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['orderStatus', 'companyName', 'deliveryAddress', 'totalPrice', 'products', 'options'];
  orderList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private orderService: OrderServices, private snackBar: MatSnackBar,  public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllOrders();

  }

  getAllOrders(): void {
    this.orderService.getAllOrder().subscribe(resOrder => {
      this.orderList = resOrder;
      localStorage.setItem('korpa', resOrder);
      this.orderList.forEach(order => {
        this.orderService.calculateTotal(order.id).subscribe(resTotal => {
          order.total = resTotal;
        });
      });
      this.dataSource.data = this.orderList;
      this.dataSource.paginator = this.paginator;
    });

  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  toggleProductOrderStatus(id: any, b: string): void {
    this.orderService.toggleOrderStatus(id, b).subscribe(() => {
      this.getAllOrders();
      if (b === 'Odbijena') {
        this.openSnackBar('Uspesno ste odbili porudžbinu', 'Zatvori');
      } else {
        this.openSnackBar('Uspesno ste prihvatili porudžbinu', 'Zatvori');
      }
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
