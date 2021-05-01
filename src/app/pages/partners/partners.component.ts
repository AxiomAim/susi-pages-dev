import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  // public settings: SUSIPartnerDto;
  // public slides = [];
  // public regularDistribution = 100 / 3;

  constructor(
    public appSettings: AppSettings,
    public appService: AppService
  ) {

    // this.appSettings.settings$.pipe(tap(settings => {
    //   this.settings = settings;
    // })).subscribe();

  }

  ngOnInit() {
    // this.getSlides();
  }

  // public getSlides() {
  //   this.appService.getHomeCarouselSlides().subscribe(res => {
  //     this.slides = res;
  //   })
  // }

}