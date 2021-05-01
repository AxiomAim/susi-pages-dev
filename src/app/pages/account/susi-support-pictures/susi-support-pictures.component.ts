import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SUSISupportDto, SUSISupportModel } from 'src/app/core/models/susi-support.model';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { tap, map } from 'rxjs/operators';
import { SusiConfirmDialogComponent } from '../susi-confirm-dialog/susi-confirm-dialog.component';
import { SusiConfirmDialogModel } from '../susi-confirm-dialog/susi-confirm-dialog.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import{ UtilService } from '../../../core/services/util/util.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-susi-support-pictures',
  templateUrl: './susi-support-pictures.component.html',
  styleUrls: ['./susi-support-pictures.component.scss']
})
export class SusiSupportPicturesComponent implements OnInit {
  public sub: any;
  public supportId: any = 'susiadaptors.com';
  public supportCategory: any = 'pictures';
  public support: SUSISupportDto = SUSISupportModel.emptyDto();
  public pictures: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private susiSupportDataService: SusiSupportDataService,
    public matDialog: MatDialog,
    public utilService: UtilService
  ) { }

  ngOnInit(): void {
    
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.supportId = params["id"];
      console.log(`partnerId: ${JSON.stringify(this.supportId, null, 2)}`);
      this.susiSupportDataService.getOne(this.supportId).pipe(tap(res => {
        this.support = res;
        this.pictures = this.support.pictures;
      })).subscribe();
    });

  }

  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  remove(pictures): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.support.pictures = this.support.pictures.filter(obj => obj !== pictures);
        this.susiSupportDataService.update(this.support).then(() => { });
      }
    });
  }

  editImages(i) {
    this.utilService.navigate(`/account/susi-support-pictures-edit/ ${i}`);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.support.pictures, event.previousIndex, event.currentIndex);
    this.susiSupportDataService.update(this.support).then(res => {
      this.ngOnInit();
    });
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(SusiPicturesListAddDialog, {
      width: '250px',
      data: {id: null, name: null, description: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`result: ${JSON.stringify(result, null, 2)}`);
      let album = { id: result.id, name: result.name, description: result.description, images: [] };
      this.support.pictures.push(album);
      // this.db.doc(`support/${this.supportId}`).update(this.support);
      this.susiSupportDataService.create(this.support).then(res => {
        this.ngOnInit();
      });
    });
  }

}


@Component({
  selector: 'susi-support-pictures-add.component',
  templateUrl: 'susi-support-pictures-add.component.html',
})
export class SusiPicturesListAddDialog {

  public submitForm: FormGroup;
  public id: string;
  public name: string;
  public description: string;

  constructor(
    public dialogRef: MatDialogRef<SusiPicturesListAddDialog>,
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


