import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SusiPartnerDataService } from 'src/app/core/services/data-services/susi-partner-data.service';
import { SUSIPartnerDto, SUSIPartnerModel } from 'src/app/core/models/susi-partner.model';
import { UtilService } from '../../../core/services/util/util.service';
import { matchingPasswords, emailValidator, urlValidator, phoneValidator, domainValidator } from 'src/app/theme/utils/app-validators';
import { tap, map } from 'rxjs/operators';
import { StorageService } from '../../../core/services/firestore/filestorage.service';

@Component({
  selector: 'app-susi-partner-edit',
  templateUrl: './susi-partner-edit.component.html',
  styleUrls: ['./susi-partner-edit.component.scss']
})
export class SusiPartnerEditComponent implements OnInit {
  private sub: any;
  private supportId: any;
  public submitForm: FormGroup;
  public logoFile: any;

  public id;
  public partner: SUSIPartnerDto;

  public themes: any[];

  constructor(public appService: AppService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    public susiPartnerDataService: SusiPartnerDataService,
    public utilService: UtilService,
    public storageService: StorageService
  ) {
    this.themes = this.appService.getThemes();
    // console.log(`${JSON.stringify(this.themes, null, 2)}`);

  }

  ngOnInit() {
    this.submitForm = this.fb.group({
      basic: this.fb.group({
        id: [null, Validators.compose([Validators.required, domainValidator])],
        theme: [null, Validators.required],
        name: [null, Validators.required],
        logo: null,
        partnerBar: [null, Validators.required],
      }),
    });

    this.partner = SUSIPartnerModel.emptyDto();
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.supportId = params["id"];
      console.log(`partnerId: ${JSON.stringify(this.supportId, null, 2)}`);
      this.susiPartnerDataService.getOne(this.supportId).pipe(tap(res => {
        this.partner = res;
      })).subscribe();
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  onSubmitForm(form) {
    // if (this.submitForm.get(form).valid) {
      if (form === "basic") {
        //Basic
        let hasLogo = this.logoFile ? true : false;
        if(hasLogo) {
          let imgBlob = this.imgURItoBlob(this.logoFile[0].preview);
          let fileName = this.generateFilename();
  
          this.storageService.uploadContent('/partners/', imgBlob, fileName).then(
            success => {
              console.log(`imageUrl: ${JSON.stringify(success, null, 2)}`);
              this.partner.logo = success.url;
              console.log(`partner: ${JSON.stringify(this.partner, null, 2)}`);
              this.susiPartnerDataService.update(this.partner).then(res => {
                this.snackBar.open('Partner has been updated.', '×', {
                  verticalPosition: 'top',
                  duration: 5000
                });
                this.utilService.navigate('/account/susi-partners-list');
              }).catch(err => {
                console.log(`error: ${JSON.stringify(err, null, 2)}`);
                this.snackBar.open('Error: ' + err, '×', {
                  verticalPosition: 'top',
                  duration: 5000
                });
              });
      
            }
          ).catch(err => {
            this.snackBar.open('Error.', '×', {
              verticalPosition: 'top',
              duration: 5000
            });
          });
        } else {
          this.susiPartnerDataService.update(this.partner).then(res => {
            this.snackBar.open('Partner has been updated.', '×', {
              verticalPosition: 'top',
              duration: 5000
            });
            this.utilService.navigate('/account/susi-partners-list');
          }).catch(err => {
            this.snackBar.open('Error.' + err, '×', {
              verticalPosition: 'top',
              duration: 5000
            });
          });
        }
      }
    // }
  }


  upload(input_file) {
    alert(JSON.stringify(input_file, null, 2));
    // this.storageService.uploadContent(input_file.file, input_file.input_file).then(res => {
    //   alert(JSON.stringify(res, null, 2));
    // });

  }

  drop(): void {
    alert(JSON.stringify("input_file", null, 2));

  }


  imgURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: mimeString
    });
  }

  generateFilename() {
    var length = 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }


  public step = 0;
  setStep(index: number) {
    this.step = index;
  }
  // onSubmitForm(form){
  //   if(this.submitForm.get(form).valid){
  //     this.nextStep();
  //     if(form == "media"){
  //       this.snackBar.open('The property "' + this.partner.name + '" has been updated.', '×', {
  //         verticalPosition: 'top',
  //         duration: 5000 
  //       }); 
  //     }
  //   }
  // }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
}
