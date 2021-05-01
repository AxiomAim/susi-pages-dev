import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { matchingPasswords, emailValidator, urlValidator, phoneValidator, domainValidator } from 'src/app/theme/utils/app-validators';
import { StorageService } from '../../../core/services/firestore/filestorage.service';
import { SusiPartnerDataService } from 'src/app/core/services/data-services/susi-partner-data.service';
import { SUSIPartnerDto, SUSIPartnerModel } from 'src/app/core/models/susi-partner.model';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../../core/services/util/util.service';
import { InputFile } from 'ngx-input-file';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-susi-partner-submit',
  templateUrl: './susi-partner-submit.component.html',
  styleUrls: ['./susi-partner-submit.component.scss']
})
export class SusiPartnerSubmitComponent implements OnInit {
  @ViewChild('horizontalStepper') horizontalStepper: MatStepper;
  @ViewChild('addressAutocomplete') addressAutocomplete: ElementRef;
  // @ViewChild('logo') logo: InputFileComponent; 

  public submitForm: FormGroup;
  public zoom: number = 12;
  public id;
  public partner: SUSIPartnerDto;
  public images: any[] = [];
  public logoFile: any;
  files: InputFile[] = [];
  public myModel: InputFile[];
  public themes: any[];

  constructor(public appService: AppService,
    public storageService: StorageService,
    private fb: FormBuilder,
    public susiPartnerDataService: SusiPartnerDataService,
    public route: ActivatedRoute,
    public utilService: UtilService,
    private snackBar: MatSnackBar
  ) {
    this.partner = SUSIPartnerModel.emptyDto();
    this.themes = this.appService.getThemes();
  }

  ngOnInit() {

    this.submitForm = this.fb.group({
      basic: this.fb.group({
        id: [null, Validators.compose([Validators.required, domainValidator])],
        theme: [null, Validators.required],
        name: [null, Validators.required],
        logo: [null, Validators.required],
        partnerBar: [null, Validators.required],
      }),
    });
  }

  public onSelectionChange(e: any) {
    if (e.selectedIndex == 1) {
      // Basic
      this.partner.id = this.submitForm.value.basic.id;
      this.partner.theme = this.submitForm.value.basic.theme;
      this.partner.name = this.submitForm.value.basic.name;
      this.horizontalStepper._steps.forEach(step => step.editable = false);

      let imgBlob = this.imgURItoBlob(this.logoFile[0].preview);
      let fileName = this.generateFilename();
      // alert(JSON.stringify(this.partner));
  
      this.storageService.uploadContent('/partners/', imgBlob, fileName + '.jpg').then(
        success => {
          console.log(`imageUrl: ${JSON.stringify(success, null, 2)}`);
          this.partner.logo = success.url;
          this.partner.id = this.submitForm.value.basic.id;
          this.partner.theme = this.submitForm.value.basic.theme;
          this.partner.name = this.submitForm.value.basic.name;
          this.susiPartnerDataService.create(this.partner).then(res => {
            this.snackBar.open('Partner has been updated.', '×', {
              verticalPosition: 'top',
              duration: 5000
            });
          }).catch(err => {
            this.snackBar.open('Error.', '×', {
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
    }
  }

  public post() {
    let url = "data:image/jpeg;base64," + this.logoFile.preview;

    let imgBlob = this.imgURItoBlob(url);
    let fileName = this.generateFilename();

    this.storageService.uploadContent('/partners/', imgBlob, fileName + '.jpg').then(
      success => {
        console.log(`imageUrl: ${JSON.stringify(success, null, 2)}`);
        this.partner.logo = success.url;
        this.partner.id = this.submitForm.value.basic.id;
        this.partner.theme = this.submitForm.value.basic.theme;
        this.partner.name = this.submitForm.value.basic.name;
        this.susiPartnerDataService.create(this.partner).then(res => {
          this.snackBar.open('Partner has been updated.', '×', {
            verticalPosition: 'top',
            duration: 5000
          });
        }).catch(err => {
          this.snackBar.open('Error.', '×', {
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


}