import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {DocumentService} from '../../../services/document-service';
import {MatPaginator} from '@angular/material/paginator';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmployeeServices} from '../../../services/employee-services';

@Component({
  selector: 'app-ceo-document-administration-dialog-component',
  templateUrl: './ceo-document-administration-dialog.component.html',
  styleUrls: ['./ceo-document-administration-dialog.component.css']
})
export class CeoDocumentAdministrationDialogComponent implements OnInit {

  documentsList;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  displayedColumns: string[] = ['fileName', 'creatorName', 'category', 'delete'];
  dataSource = new MatTableDataSource([]);

  constructor(private http: HttpClient, private documentService: DocumentService,
              @Inject(MAT_DIALOG_DATA) public data,
              private employeeService: EmployeeServices) {
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  // tslint:disable-next-line:typedef
  get f() {
    return this.myForm.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  // tslint:disable-next-line:typedef
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  // tslint:disable-next-line:typedef
  submit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);

    let ownerName;
    this.employeeService.getEmployeeById(this.data.id).subscribe(value => {
      ownerName = value;


      const document = {
        owner: ownerName.userId.username,
        category: this.myForm.get('name').value,
        file_name: this.myForm.get('fileSource').value.name
      };
      this.documentService.saveDocument(document, this.myForm.get('fileSource').value).subscribe(() => {
          this.getDocuments();
      });

    });

  }

  getDocuments(): void {
    this.documentService.getAllDocuments().subscribe(document => {
      this.documentsList = document;
      console.log(this.documentsList);
      this.dataSource.data = this.documentsList;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteDocument(document): void {
    this.documentService.deleteDocument(document.documentId).subscribe(value => {
      this.getDocuments();
    });
    console.log('delete');
  }
}
