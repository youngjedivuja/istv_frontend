import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeServices} from '../../services/employee-services';
import {MatPaginator} from '@angular/material/paginator';
import {filterUser} from '../../utils/filterUtil';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CeoEmployeeCreateDialogComponent} from './ceo-employee-create-dialog/ceo-employee-create-dialog.component';
import {CeoEmployeeViewComponent} from './ceo-employee-view/ceo-employee-view.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ceo-employee-administration',
  templateUrl: './ceo-employee-administration.component.html',
  styleUrls: ['./ceo-employee-administration.component.css']
})
export class CeoEmployeeAdministrationComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'surname', 'jmbg', 'employmentStartDate', 'employmentEndDate', 'options'];
  dataSource = new MatTableDataSource([]);
  employeeList;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private employeeService: EmployeeServices) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(): void {
    this.employeeService.getAllEmployee().subscribe(employees => {
      this.employeeList = employees;
      this.dataSource.data = this.employeeList;
      this.dataSource.paginator = this.paginator;
    });
  }

  searchWorker(inputPar: string): void {
    if (inputPar) {
      this.dataSource.data = this.employeeList.filter(item => filterUser(item.userId, inputPar));
    } else {
      this.dataSource.data = this.employeeList;
    }
  }

  openAddEmployeeDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    this.dialog.open(CeoEmployeeCreateDialogComponent, dialogConfig).afterClosed().subscribe(() => {
      this.getAllEmployee();
    });
  }

  openWorkerInfo(data): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '300px';
    dialogConfig.data = {
      id: data.id
    };
    this.dialog.open(CeoEmployeeViewComponent, dialogConfig).afterClosed();
  }

  openEditDialog(employee: any): void {
    console.log('EDIT');
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  toggleEmployeeRecordStatus(id: any, status: boolean | undefined): void {
    console.log(id);
    this.employeeService.toggleEmployeeRecordStatus(id).subscribe(() => {
      this.getAllEmployee();
      if (status) {
        this.openSnackBar('Uspesno ste aktivirali zaposlenog', 'Zatvori');
      } else {
        this.openSnackBar('Uspesno ste deaktivirali zaposlenog', 'Zatvori');
      }
    });
  }
}
