import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SUSIAlbumDto, SUSIAlbumModel } from 'src/app/core/models/susi-album.model';
import { SusiAlbumDataService } from '../../../core/services/data-services/susi-album-data.service';
import { UUID } from 'angular2-uuid';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-susi-images-upload',
  templateUrl: './susi-images-upload.component.html',
  styleUrls: ['./susi-images-upload.component.scss']
})
export class SusiImagesUploadComponent implements OnInit {

  @Input() file: File;
  @Input() albumId: any;
  @Output() url: EventEmitter<String> = new EventEmitter<String>();

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;
  album: SUSIAlbumDto = SUSIAlbumModel.emptyDto();

  constructor(
    private storage: AngularFireStorage, 
    private db: AngularFirestore,
    private susiAlbumDataService: SusiAlbumDataService
    ) { }

  ngOnInit() {
    this.susiAlbumDataService.getOne(this.albumId).pipe(tap(res => {
      console.log(`res: ${ JSON.stringify(res, null, 2) }`);
      this.album = res;
      if(!this.album.images) {
        this.album.images = [];
      };      
    })).subscribe();

      this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `susi-gallery/${this.albumId}/${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.album.images.push({name: this.file.name, img: this.downloadURL, extUrl: path, path: path })
        this.db.doc(`gallery/${this.albumId}`).update(this.album);

        // this.susiAlbumDataService.getOne(this.albumId).pipe(tap(res => {
        //   console.log(`album: ${ JSON.stringify(res, null, 2) }`);
        //   var album: SUSIAlbumDto = SUSIAlbumModel.emptyDto();
        //   album = res;
        //   if(!album.images) {
        //     album.images = [];
        //   };
          
        //   console.log(`album: ${ JSON.stringify(album, null, 2) }`);
        //   // album.images.push({url: this.downloadURL, path: path })
        //   console.log(`album: ${ JSON.stringify(album, null, 2) }`);

        //   this.db.doc(`gallery/${this.albumId}`).update(album);
        //   this.db.collection('files').add( { albumId: this.albumId, downloadURL: this.downloadURL, path });
        //   // this.susiAlbumDataService.update(album).then(() => {});

        //   }));

      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
