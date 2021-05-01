import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { SUSISupportDto, SUSISupportModel } from 'src/app/core/models/susi-support.model';
import { Customers } from '../../../core/models/susi-support.model';
import { UtilService } from '../../../core/services/util/util.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-susi-support',
  templateUrl: './susi-support.component.html',
  styleUrls: ['./susi-support.component.scss']
})
export class SusiSupportComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions' ];
  dataSource: MatTableDataSource<SUSISupportDto>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  

  public support: SUSISupportDto;

  constructor(
    public susiSupportDataService: SusiSupportDataService,
    public utilService: UtilService,
    public dialog: MatDialog

  ) { 
    this.support = SUSISupportModel.emptyDto();

  }

  ngOnInit(): void {
    this.susiSupportDataService.get().subscribe(data => {
      if(data) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
          }
    });
  }


  brochures(item: any) {
    // alert(JSON.stringify(item, null, 2));
    this.utilService.navigate('/account/susi-support-brochures/' + item.id);
  }

  caseStudies(item: any) {
    this.utilService.navigate('/account/susi-support-case-studies/' + item.id);
  }

  pictures(item: any) {
    this.utilService.navigate('/account/susi-support-pictures/' + item.id);
  }

  customers(item: any) {
    this.utilService.navigate('/account/susi-support-customers/' + item.id);
  }

  installationGuides(item: any) {
    this.utilService.navigate('/account/susi-support-installation-guides/' + item.id);
  }

  selectionGuides(item: any) {
    alert(`${item.id}`);
    this.utilService.navigate('/account/susi-support-selection-guides/' + item.id);
  }

  slideShows(item: any) {
    this.utilService.navigate('/account/susi-support-slide-shows/' + item.id);
  }

  threeSixtyViews(item: any) {
    this.utilService.navigate('/account/susi-support-three-sixty-views/' + item.id);
  }

  userDrawings(item: any) {
    this.utilService.navigate('/account/susi-support-user-drawings/' + item.id);
  }

  videos(item: any) {
    this.utilService.navigate('/account/susi-support-videos/' + item.id);
  }

  wiringDiagrams(item: any) {
    this.utilService.navigate('/account/susi-support-wiring-diagrams/' + item.id);
  }

  public remove(support: SUSISupportDto) {
    const index: number = this.dataSource.data.indexOf(support);    
    if (index !== -1) {
      this.dataSource.data.splice(index,1);
      this.dataSource = new MatTableDataSource<SUSISupportDto>(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } 
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SusiSupportAddDialog, {
      width: '250px',
      data: {id: this.support.id, name: this.support.name, description: this.support.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`result: ${JSON.stringify(result, null, 2)}`);
      // this.support = result;
      this.support.id = result.name;
      this.support.name = result.name;
      this.support.description = result.description;
      // alert(`support: ${JSON.stringify(this.support, null, 2)}`);
      this.susiSupportDataService.create(this.support).then(res => {
        this.ngOnInit();
      });
    });
  }

}

@Component({
  selector: 'susi-support-add.component',
  templateUrl: 'susi-support-add.component.html',
})
export class SusiSupportAddDialog {

  public submitForm: FormGroup;
  public id: string;
  public name: string;
  public description: string;

  constructor(
    public dialogRef: MatDialogRef<SusiSupportAddDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: SUSISupportDto) {

      this.id = data.id;
      this.name = data.name;
      this.description = data.description;

      this.submitForm = fb.group({
        id: [this.id, []],
        name: [this.name, []],
        description: [this.description, []],
      });
    }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.data.id = this.submitForm.value.id;
    this.data.name = this.submitForm.value.name;
    this.data.description = this.submitForm.value.description;
  }

}
