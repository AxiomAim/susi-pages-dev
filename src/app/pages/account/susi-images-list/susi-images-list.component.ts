import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SusiAlbumDataService } from '../../../core/services/data-services/susi-album-data.service';
import { SUSIAlbumDto, SUSIAlbumModel } from 'src/app/core/models/susi-album.model';
import { UtilService } from '../../../core/services/util/util.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-susi-images-list',
  templateUrl: './susi-images-list.component.html',
  styleUrls: ['./susi-images-list.component.scss']
})

export class SusiImagesListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'actions' ];
  dataSource: MatTableDataSource<SUSIAlbumDto>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  

  public album: SUSIAlbumDto;

  constructor(
    public susiAlbumDataService: SusiAlbumDataService,
    public utilService: UtilService,
    public dialog: MatDialog

  ) { 
    this.album = SUSIAlbumModel.emptyDto();

  }

  ngOnInit(): void {
    this.susiAlbumDataService.get().subscribe(data => {
      if(data) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
          }
    });
  }

  viewPartner(item: any) {
    console.log(JSON.stringify(item, null, 2));
    this.utilService.navigate('/account/susi-images-edit/' + item.id);
  }

  
  public remove(partner: SUSIAlbumDto) {
    const index: number = this.dataSource.data.indexOf(partner);    
    if (index !== -1) {
      this.dataSource.data.splice(index,1);
      this.dataSource = new MatTableDataSource<SUSIAlbumDto>(this.dataSource.data);
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
    const dialogRef = this.dialog.open(SusiImageListAddDialog, {
      width: '250px',
      data: { name: null, description: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.album = SUSIAlbumModel.emptyDto();
        this.album.name = result.name;
        this.album.description = result.description;
        this.album.images = [];
        // alert(`${JSON.stringify(this.album, null, 2)}`);
        this.susiAlbumDataService.create(this.album).then(res => {
          this.ngOnInit();
        });  
      }
    });
  }

}

@Component({
  selector: 'susi-images-list-add.component',
  templateUrl: 'susi-images-list-add.component.html',
})
export class SusiImageListAddDialog {

  public submitForm: FormGroup;
  public name:string;
  public description:string;

  constructor(
    public dialogRef: MatDialogRef<SusiImageListAddDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: SUSIAlbumDto) {

      this.name = data.name;
      this.description = data.description;

      this.submitForm = fb.group({
        name: [this.name, []],
        description: [this.description, []],
      });
    }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.data.name = this.submitForm.value.name;
    this.data.description = this.submitForm.value.description;
  }

}