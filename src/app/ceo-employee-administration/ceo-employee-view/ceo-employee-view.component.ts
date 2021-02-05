import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {EmployeeServices} from '../../../services/employee-services';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ceo-employee-view',
  templateUrl: './ceo-employee-view.component.html',
  styleUrls: ['./ceo-employee-view.component.css']
})
export class CeoEmployeeViewComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    unid: new FormControl(),
    pin: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    position: new FormControl(),
    bank: new FormControl(),
    employmentStartDate: new FormControl(),
    employmentEndDate: new FormControl(),
  });
  employee;

  constructor(private dialogRef: MatDialogRef<CeoEmployeeViewComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private employeeService: EmployeeServices) {
  }

  ngOnInit(): void {
    this.form.disable();
    this.getEmployeeInfo(this.data);
  }

  getEmployeeInfo(employeeId): void {
    this.employeeService.getEmployeeById(employeeId.id).subscribe(employee => {
      this.employee = employee;
    });
  }

  closeHoursDialog(): void {
    this.dialogRef.close();
  }
}
