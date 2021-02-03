import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {EmployeeServices} from '../../services/employee-services';

@Component({
  selector: 'app-ceo-employee-administration',
  templateUrl: './ceo-employee-administration.component.html',
  styleUrls: ['./ceo-employee-administration.component.css']
})
export class CeoEmployeeAdministrationComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'surname', 'jmbg', 'employmentStartDate', 'options'];
  dataSource = new MatTableDataSource([]);

  constructor(public employeeService: EmployeeServices) {
  }

  ngOnInit(): void {
  }


  searchWorker(inputPar: string): void {
    if (inputPar) {
      // this.dataSource.data = this.users.filter(item => filterUserCategory(item, inputPar));
    } else {
      // this.dataSource.data = this.users;
    }
  }

}
