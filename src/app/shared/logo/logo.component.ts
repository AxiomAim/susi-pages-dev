import { Component, Input } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { SUSIPartnerDto, SUSIPartnerModel } from 'src/app/core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent { 
  @Input() logoUrl: string = '';

  public settings: SUSIPartnerDto = SUSIPartnerModel.emptyDto();

  constructor(
    public appSettings:AppSettings
    ) {
    this.appSettings.settings$.pipe(tap(settings => {
      if(settings) {
        this.settings = settings;
      }
    })).subscribe();
  }
}
