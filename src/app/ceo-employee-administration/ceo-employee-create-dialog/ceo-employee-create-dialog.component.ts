import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeServices} from '../../../services/employee-services';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ceo-employee-create-dialog',
  templateUrl: './ceo-employee-create-dialog.component.html',
  styleUrls: ['./ceo-employee-create-dialog.component.css']
})
export class CeoEmployeeCreateDialogComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    unid: new FormControl(null, Validators.required),
    pin: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    birthDate: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    position: new FormControl(null, Validators.required),
    bank: new FormControl(null, Validators.required),
    employmentStartDate: new FormControl(null, Validators.required),
    employmentEndDate: new FormControl(null, Validators.required),
  });
  employee;

  constructor(private dialogRef: MatDialogRef<CeoEmployeeCreateDialogComponent>,
              private employeeService: EmployeeServices,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.getEmployeeByEmployeeId();
      this.form.get('unid').disable();
      this.form.get('username').disable();
    }
  }

  saveUser(): void {
    if (this.data) {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
      });
    } else {
      this.employeeService.saveEmployee(this.form.value).subscribe(employee => {
      });
    }
    this.dialogRef.close();
  }

  getEmployeeByEmployeeId(): void {
    this.employeeService.getEmployeeById(this.data.id).subscribe(resEmployee => {
      this.employee = resEmployee;
      this.form.get('name').setValue(this.employee.userId.personId.name);
      this.form.get('surname').setValue(this.employee.userId.personId.surname);
      this.form.get('unid').setValue(this.employee.userId.personId.unid);
      this.form.get('pin').setValue(this.employee.userId.personId.pin);
      this.form.get('gender').setValue(this.employee.userId.personId.gender);
      this.form.get('birthDate').setValue(this.employee.userId.personId.birthDate);
      this.form.get('email').setValue(this.employee.userId.email);
      this.form.get('username').setValue(this.employee.userId.username);
      this.form.get('position').setValue(this.employee.position);
      this.form.get('bank').setValue(this.employee.bank);
      this.form.get('employmentStartDate').setValue(this.employee.employmendStartDate);
      this.form.get('employmentEndDate').setValue(this.employee.employmendEndDate);
    });
  }
}
