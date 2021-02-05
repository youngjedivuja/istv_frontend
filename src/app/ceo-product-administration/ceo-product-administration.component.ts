import {Component, OnInit, ViewChild} from '@angular/core';
import {filterProduct} from '../../utils/filterUtil';
import {ProductServices} from '../../services/product-services';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CeoProductCreateComponent} from './ceo-product-create/ceo-product-create.component';

@Component({
  selector: 'app-ceo-product-administration',
  templateUrl: './ceo-product-administration.component.html',
  styleUrls: ['./ceo-product-administration.component.css']
})
export class CeoProductAdministrationComponent implements OnInit {
  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['productCode', 'productName', 'countryOfOrigin', 'quantity', 'price', 'options'];
  productList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  toggleProductRecordStatus(id: any, status: boolean): void {
    this.productService.toggleProductRecordStatus(id).subscribe(() => {
      this.getAllProduct();
      if (status) {
        this.openSnackBar('Uspesno ste aktivirali proizvod', 'Zatvori');
      } else {
        this.openSnackBar('Uspesno ste deaktivirali proizvod', 'Zatvori');
      }
    });
  }

  openEditDialog(product: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    dialogConfig.data = {
      id: product.id
    };
    this.dialog.open(CeoProductCreateComponent, dialogConfig).afterClosed();
  }

  openProductEmployeeDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(CeoProductCreateComponent, dialogConfig).afterClosed().subscribe(() => {
      this.getAllProduct();
    });
  }
}
