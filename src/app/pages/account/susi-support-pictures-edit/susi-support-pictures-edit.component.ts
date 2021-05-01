import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SUSISupportDto, SUSISupportModel } from 'src/app/core/models/susi-support.model';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SusiConfirmDialogComponent } from '../susi-confirm-dialog/susi-confirm-dialog.component';
import { SusiConfirmDialogModel } from '../susi-confirm-dialog/susi-confirm-dialog.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AppSettings } from '../../../app.settings';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-susi-support-pictures-edit',
  templateUrl: './susi-support-pictures-edit.component.html',
  styleUrls: ['./susi-support-pictures-edit.component.scss']
})
export class SusiSupportPicturesEditComponent implements OnInit {
  public settings: SUSIPartnerDto;
  private sub: any;
  private supportId: any;
  private index: any;
  private supportCategory: any = 'pictures';
  private support: SUSISupportDto = SUSISupportModel.emptyDto();
  public albumName: any;
  public images: any;
  public imageKeys: any;

  constructor(
    public appSettings: AppSettings,
    public activatedRoute: ActivatedRoute,
    private susiSupportDataService: SusiSupportDataService,
    public matDialog: MatDialog,
    public storage: AngularFireStorage,
  ) { 

  }

  ngOnInit(): void {
    this.appSettings.settings$.pipe
    (tap(settings => {
      this.settings = settings;
      this.supportId = this.settings.id;

      this.sub = this.activatedRoute.params.subscribe(params => {
        this.index = params["index"];
        this.susiSupportDataService.getOne(this.supportId).pipe(tap(res => {
          this.support = res;
          // this.albumName = this.support.pictures[this.index].name;
          this.images = this.support.pictures[this.index].images;
        })).subscribe();
      });
  
    })).subscribe();
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

  remove(image): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    const ref = this.storage.ref(image.path);
    ref.delete();

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.support.pictures[this.index].images = this.support.pictures[this.index].images.filter(obj => obj !== image);
        this.susiSupportDataService.update(this.support).then(() => { });
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    this.support.pictures[this.index].images = this.images;
    this.susiSupportDataService.update(this.support).then(res => {
      this.ngOnInit();
    });
  }

}

