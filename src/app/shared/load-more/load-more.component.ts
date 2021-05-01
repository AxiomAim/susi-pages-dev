import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Input() step: number = 1;
  public settings: SUSIPartnerDto;
  constructor(public appSettings:AppSettings) {
    // this.settings = this.appSettings.settings; 
    this.appSettings.settings$.pipe(tap(settings => {
      this.settings = settings;
    })).subscribe();

  }

  ngOnInit() {
    this.settings.loadMore.step = this.step;
  }

  public startLoad(){
    this.settings.loadMore.start = true;
    this.settings.loadMore.load = true;
  }

}
