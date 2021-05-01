import { Component, OnInit, ViewChild, Inject } from '@angular/core';
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
import { ThreeSixtyViews } from 'src/app/core/models/susi-support.model';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-susi-support-three-sixty-views',
  templateUrl: './susi-support-three-sixty-views.component.html',
  styleUrls: ['./susi-support-three-sixty-views.component.scss']
})
export class SusiSupportThreeSixtyViewsComponent implements OnInit {
  public sub: any;
  public supportId: any;
  public support: SUSISupportDto;
  public threeSixtyViews: ThreeSixtyViews;

  constructor(
    public susiSupportDataService: SusiSupportDataService,
    public utilService: UtilService,
    public matDialog: MatDialog,
    public storage: AngularFireStorage,
    private activatedRoute: ActivatedRoute
  ) {
    this.support = SUSISupportModel.emptyDto();

    this.sub = this.activatedRoute.params.subscribe(params => {
      this.supportId = params["id"];
      console.log(`partnerId: ${JSON.stringify(this.supportId, null, 2)}`);
      this.susiSupportDataService.getOne(this.supportId).pipe(tap(res => {
        this.support = res;
      })).subscribe();
    });
  }

  ngOnInit(): void {
  }

  viewPartner(item: any) {
    console.log(JSON.stringify(item, null, 2));
    this.utilService.navigate('/account/susi-images-edit/' + item.id);
  }

  // public applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  openDialog(): void {
    const dialogRef = this.matDialog.open(SusiSupportThreeSixtyViewsAddDialog, {
      width: '250px',
      // data: { partner: this.threeSixtyViews.partner, type: this.threeSixtyViews.type, part: this.threeSixtyViews.part, extUrl: this.threeSixtyViews.extUrl }
      data: { partner: null, type: null, part: null, extUrl: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      let threeSixtyViews: ThreeSixtyViews = result;
      this.support.threeSixtyViews.push(threeSixtyViews);
      this.susiSupportDataService.create(this.support).then(res => {
        this.ngOnInit();
      });
    });
  }

  remove(slideShows): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.support.threeSixtyViews = this.support.slideShows.filter(obj => obj !== slideShows);
        this.susiSupportDataService.update(this.support).then(() => { });
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.support.threeSixtyViews, event.previousIndex, event.currentIndex);
    this.susiSupportDataService.update(this.support).then(res => {
      this.ngOnInit();
    });
  }

}

@Component({
  selector: 'susi-support-three-sixty-views-add.component',
  templateUrl: 'susi-support-three-sixty-views-add.component.html',
})
export class SusiSupportThreeSixtyViewsAddDialog {

  public submitForm: FormGroup;
  public partner: string;
  public type: string;
  public part: string;
  public extUrl: string;

  constructor(
    public dialogRef: MatDialogRef<SusiSupportThreeSixtyViewsAddDialog>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ThreeSixtyViews) {

    this.partner = data.partner;
    this.type = data.type;
    this.part = data.part;
    this.extUrl = data.extUrl;

    this.submitForm = fb.group({
      partner: [this.partner, [Validators.required]],
      type: [this.type, [Validators.required]],
      part: [this.part, [Validators.required]],
      extUrl: [this.extUrl, [Validators.required]]
    });

  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
    this.data.partner = this.submitForm.value.partner;
    this.data.type = this.submitForm.value.type;
    this.data.part = this.submitForm.value.part;
    this.data.extUrl = this.submitForm.value.extUrl;
  }


}
