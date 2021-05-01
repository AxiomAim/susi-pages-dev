import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { SUSISupportDto, SUSISupportModel } from 'src/app/core/models/susi-support.model';
import { UtilService } from '../../../core/services/util/util.service';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { SusiConfirmDialogComponent } from '../susi-confirm-dialog/susi-confirm-dialog.component';
import { SusiConfirmDialogModel } from '../susi-confirm-dialog/susi-confirm-dialog.model';
import { tap, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Videos } from 'src/app/core/models/susi-support.model';

@Component({
  selector: 'app-susi-support-videos',
  templateUrl: './susi-support-videos.component.html',
  styleUrls: ['./susi-support-videos.component.scss']
})
export class SusiSupportVideosComponent implements OnInit {
  displayedColumns: string[] = ['image', 'videoName', 'extUrl', 'youTubeId', 'actions'];
  dataSource: MatTableDataSource<Videos>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public sub: any;
  public supportId: any;
  public support: SUSISupportDto;
  public videos: Videos;

  constructor(
    public susiSupportDataService: SusiSupportDataService,
    public utilService: UtilService,
    public dialog: MatDialog,
    public matDialog: MatDialog,
    public storage: AngularFireStorage,
    private activatedRoute: ActivatedRoute
  ) {
    this.support = SUSISupportModel.emptyDto();

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.supportId = params["id"];
      console.log(`supportId: ${JSON.stringify(this.supportId, null, 2)}`);
      this.susiSupportDataService.getOne(this.supportId).pipe(tap(res => {
        this.support = res;
        this.dataSource = new MatTableDataSource(this.support.videos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      })).subscribe();
    });
  }

  ngOnInit(): void {
  }

  viewPartner(item: any) {
    console.log(JSON.stringify(item, null, 2));
    this.utilService.navigate('/account/susi-images-edit/' + item.id);
  }


  public remove_old(view: Videos) {
    const index: number = this.dataSource.data.indexOf(view);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<Videos>(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  remove(video): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.support.videos = this.support.videos.filter(obj => obj !== video);
        this.susiSupportDataService.update(this.support).then(() => { });
      }
    });
  }

  // public remove-x(view: Videos): void {
  //   const message = `Are you sure you want to do this?`;

  //   const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

  //   const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
  //     maxWidth: "400px",
  //     data: dialogData
  //   });

  //   dialogRef.afterClosed().subscribe(dialogResult => {
  //     if (dialogResult) {
  //       const index: number = this.dataSource.data.indexOf(view);
  //       if (index !== -1) {
  //         this.dataSource.data.splice(index, 1);
  //         this.dataSource = new MatTableDataSource<Videos>(this.dataSource.data);
  //         this.dataSource.paginator = this.paginator;
  //         this.dataSource.sort = this.sort;
  //       }
  //     }
  //   });
  // }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SusiSupportVideosAddDialog, {
      width: '250px',
      data: { image: null, videoName: null, extUrl: null, youTubeId: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let videos: Videos = result;
      this.support.videos.push(videos);
      this.susiSupportDataService.create(this.support).then(res => {
        this.ngOnInit();
      });
    });
  }

}

@Component({
  selector: 'susi-support-videos-add.component',
  templateUrl: 'susi-support-videos-add.component.html',
})
export class SusiSupportVideosAddDialog {

  public submitForm: FormGroup;
  public videoName: string;
  public extUrl: string;
  public youTubeId: string;
  public part: string;

  constructor(
    public dialogRef: MatDialogRef<SusiSupportVideosAddDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Videos) {

      this.videoName = data.videoName;
      this.extUrl = data.extUrl;
      this.youTubeId = data.youTubeId;

    this.submitForm = fb.group({
      videoName: [this.videoName, [Validators.required]],
      extUrl: [this.extUrl, [Validators.required]],
      youTubeId: [this.youTubeId, [Validators.required]],
    });

  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.data.videoName = this.submitForm.value.videoName;
    this.data.extUrl = this.submitForm.value.extUrl;
    this.data.youTubeId = this.submitForm.value.youTubeId;
  }

}
