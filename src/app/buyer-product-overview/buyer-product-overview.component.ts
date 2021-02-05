import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {filterProduct} from '../../utils/filterUtil';
import {ProductServices} from '../../services/product-services';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {BuyerCartComponentComponent} from './buyer-cart-component/buyer-cart-component.component';

@Component({
  selector: 'app-buyer-product-overview',
  templateUrl: './buyer-product-overview.component.html',
  styleUrls: ['./buyer-product-overview.component.css']
})
export class BuyerProductOverviewComponent implements OnInit {
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['productCode', 'productName', 'countryOfOrigin', 'price', 'options'];
  productList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  cart = [];

  constructor(private productService: ProductServices, private snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  searchProduct(inputPar: string): void {
    if (inputPar) {
      this.dataSource.data = this.productList.filter(item => filterProduct(item, inputPar));
    } else {
      this.dataSource.data = this.productList;
    }
  }

  getAllProduct(): void {
    this.productService.getAllProduct().subscribe(returnData => {
      this.productList = returnData;
      this.dataSource.data = this.productList;
      this.dataSource.paginator = this.paginator;
    });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openOrderDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1000px';
    dialogConfig.data = {
      cart: this.cart
    };
    this.dialog.open(BuyerCartComponentComponent, dialogConfig).afterClosed();
  }

  addToCart(product: any): void {
    this.cart.push(product);
    if (this.cart.includes(product)) {
      this.openSnackBar('Uspesno ste dodali proizvod', 'Zatvori');
    }
  }
}
