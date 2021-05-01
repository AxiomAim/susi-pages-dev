import { Injectable } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';
import { SusiPartnerDataService } from './core/services/data-services/susi-partner-data.service';
import { SUSIPartnerDto, SUSIPartnerModel } from './core/models/susi-partner.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppSettings {
    public hostName: String;
    public settings: SUSIPartnerDto;
    public settings$: BehaviorSubject<SUSIPartnerDto> = new BehaviorSubject<SUSIPartnerDto>(SUSIPartnerModel.defaultDto());

    constructor(
        public localStorageService: LocalStorageService,
        public susiPartnerDataService: SusiPartnerDataService
      ) {
        this.hostName = window.location.hostname;
        // console.log(`hostname: ${this.hostName}`)

        if (this.hostName == 'localhost') {
          // this.hostName = 'susiadapters.com';
          this.hostName = 'susiadaptors.com';
          // this.hostName = 'itronadaptors.com';r
        }

        if (this.hostName == 'susi-pages.web.app') {
          this.hostName = 'susiadapters.com';
        }
        

        this.susiPartnerDataService.getOne(this.hostName.toString()).pipe(
          tap(settings => {
            // console.log(`getOne(): ${JSON.stringify(settings, null, 2)}`);
            if (settings) {
              this.localStorageService.setItem('settings', settings);      
              this.settings = settings;
              this.settings$.next(settings);

              // this.settings$.subscribe(s => {
              //   this.settings = s
              // });
              // console.log(`this.settings: ${JSON.stringify(this.settings, null, 2)}`);
            } 
          })
          ).subscribe();
          // ).subscribe();


      }
    
      public getSettings(): Promise<SUSIPartnerDto> {
        return new Promise((resolve, reject) => {
          this.settings = this.localStorageService.getItem('settings');
          // console.log(`getSettings(): ${JSON.stringify(this.settings, null, 2)}`);
          resolve(this.settings);
          // this.settings$.subscribe(settings => {
          //   resolve(settings);
          // })
        });
      }
    
      public setSettings(settings: SUSIPartnerDto) {
        this.settings = settings;
        this.localStorageService.setItem('settings', settings);
        // console.log(`setItem(): ${JSON.stringify(settings, null, 2)}`);
        this.susiPartnerDataService.update(settings).then(res => {
          // this.settings$.next(settings);
        });
      } 
    }
