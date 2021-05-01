import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public settings: SUSIPartnerDto;
  public slides = [];

  constructor(
    public appSettings:AppSettings,
    public appService:AppService
    ) {
    this.appSettings.settings$.pipe(tap(settings => {
      this.settings = settings;
    })).subscribe();
  
   }

  ngOnInit() {
    this.getSlides();
  }

  public getSlides(){
    this.appService.getHomeCarouselSlides().subscribe(res=>{
      this.slides = res;
    })
  }

}