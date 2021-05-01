import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { SusiPartnerDataService } from '../../../core/services/data-services/susi-partner-data.service';
import { SUSISupportDto, SUSISupportModel, CaseStudies, SlideShows, Images } from 'src/app/core/models/susi-support.model';
import { SUSIPartnerDto, SUSIPartnerModel } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-support-upload',
  templateUrl: './support-upload.component.html',
  styleUrls: ['./support-upload.component.scss']
})
export class SupportUploadComponent implements OnInit {

  @Input() file: File;
  @Input() supportId: string;
  @Input() imageIndex: number;
  @Input() supportCategory: any;
  @Output() url: EventEmitter<String> = new EventEmitter<String>();

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;
  public support: SUSISupportDto = SUSISupportModel.emptyDto();
  public partner: SUSIPartnerDto = SUSIPartnerModel.emptyDto();

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private susiSupportDataService: SusiSupportDataService,
    private susiPartnerDataService: SusiPartnerDataService
  ) { }

  ngOnInit() {
    // alert(`supportId: ${JSON.stringify(this.supportId, null, 2)}`);
    // alert(`imageIndex: ${this.imageIndex} wupportId: ${this.supportId} supportCategory: ${this.supportCategory}`);

    this.susiSupportDataService.getOne(this.supportId).pipe(tap(res => {
      this.support = res;
      // console.log(`supportClass: ${JSON.stringify(this.support, null, 2)}`);

    })).subscribe();

    this.susiPartnerDataService.getOne(this.supportId).pipe(tap(res => {
      this.partner = res;
      // console.log(`supportClass: ${JSON.stringify(this.support, null, 2)}`);

    })).subscribe();

    this.startUpload();
  }

  startUpload() {

    // The storage path
    // const path = `susi-support/${this.supportCategory}/${Date.now()}_${this.file.name}`;
    const path = `susi-support/${this.supportCategory}/${this.file.name}`;
    const name = `${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        let pdfImage = 'https://firebasestorage.googleapis.com/v0/b/susi-pages.appspot.com/o/susi-support%2Fpdf.svg?alt=media&token=894658ac-7137-4469-9488-fb31fc6c6c40';

        switch (this.supportCategory) {
          case 'logo':
            this.partner.logo = this.downloadURL ;
            this.db.doc(`partners/${this.supportId}`).update(this.partner);
            break;
          case 'pictures':
              let image = { fileName: this.file.name, downloadUrl: this.downloadURL, extUrl: path, path: path };
              let index: number = this.imageIndex;
              this.support.pictures[index].images.push(image);
              // alert(index);
              // alert(`${JSON.stringify(this.support.pictures[index].name, null, 2)}`);
              this.db.doc(`support/${this.supportId}`).update(this.support);
              break;
            case 'brochures':
            let brochure = { fileName: this.file.name, image: pdfImage, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.brochures.push(brochure);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          case 'caseStudies':
            let caseStudy: CaseStudies = { image: pdfImage, fileName: this.file.name, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.caseStudies.push(caseStudy);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          case 'customers':
            let customers = { fileName: this.file.name, image: pdfImage, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.installationGuides.push(customers);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          case 'installationGuides':
            let installationGuides = { fileName: this.file.name, image: pdfImage, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.installationGuides.push(installationGuides);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          case 'selectionGuides':
            let selectionGuides = { fileName: this.file.name, image: pdfImage, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.selectionGuides.push(selectionGuides);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          case 'slideShows':
            let slideShow: SlideShows = { image: pdfImage, fileName: this.file.name, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.slideShows.push(slideShow);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          // case 'threeSixtyViews':
          //   partner?: string;
          //   type?: string;
          //   part?: string;
          //   extUrl?: string,

          //   this.support.threeSixtyViews.push({ partner: this.file.name, downloadUrl: this.downloadURL, extUrl: path, path: path })
          //   break;
          case 'userDrawings':
            let userDrawings = { fileName: this.file.name, image: pdfImage, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.userDrawings.push(userDrawings);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
          case 'videos':
            break;
          case 'wiringDiagrams':
            let wiringDiagrams = { fileName: this.file.name, image: pdfImage, downloadUrl: this.downloadURL, extUrl: path, path: path };
            this.support.wiringDiagrams.push(wiringDiagrams);
            this.db.doc(`support/${this.supportId}`).update(this.support);
            break;
        }
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
