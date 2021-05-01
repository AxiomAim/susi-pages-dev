import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SUSIAlbumDto, SUSIAlbumModel } from 'src/app/core/models/susi-album.model';
import { SusiAlbumDataService } from '../../../core/services/data-services/susi-album-data.service';
import { tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SusiConfirmDialogComponent } from '../susi-confirm-dialog/susi-confirm-dialog.component';
import { SusiConfirmDialogModel } from '../susi-confirm-dialog/susi-confirm-dialog.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { KeyObject } from '../../../theme/pipes/keyObject.pipe';

@Component({
  selector: 'app-susi-images-edit',
  templateUrl: './susi-images-edit.component.html',
  styleUrls: ['./susi-images-edit.component.scss']
})
export class SusiImagesEditComponent implements OnInit {
  public sub: any;
  public albumId: any;
  public album: SUSIAlbumDto = SUSIAlbumModel.emptyDto();
  public images: any;
  public imageKeys: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private susiAlbumDataService: SusiAlbumDataService,
    public matDialog: MatDialog,
    public storage: AngularFireStorage,
    private keyObject: KeyObject
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.albumId = params["id"];
      this.susiAlbumDataService.getOne(this.albumId).pipe(tap(res => {
        this.album = res;
        this.images = this.album.images;
        this.imageKeys = this.keyObject.transform('keyObject', this.images);
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
        this.album.images = this.album.images.filter(obj => obj !== image);
        this.susiAlbumDataService.update(this.album).then(() => { });
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    this.album.images = this.images;
    this.susiAlbumDataService.update(this.album).then(res => {
      this.ngOnInit();
    });
  }

}

