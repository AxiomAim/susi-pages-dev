import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import {Observable} from 'rxjs';
import {map, tap, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-susi-header-carousel',
  templateUrl: './susi-header-carousel.component.html',
  styleUrls: ['./susi-header-carousel.component.scss']
})
export class SusiHeaderCarouselComponent implements OnInit {
  @Input('slides') slides: Array<any> = [];
  @Input('contentOffsetToTop') contentOffsetToTop; 
  public config: SwiperConfigInterface = {};  
  public currentSlide; 
  public settings: SUSIPartnerDto;
  public benefits;
  
  constructor(
    public appSettings:AppSettings,
    public appService:AppService,
    
    ) { 

      
      // this.settings = this.appSettings.settings;
    this.appSettings.settings$.pipe(tap(settings => {
      this.settings = settings;
    })).subscribe();

    this.benefits = this.appService.getBenefits();

  }

  ngOnInit() {
    if(this.contentOffsetToTop){
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    } 

    

  }

  ngAfterViewInit(){    
    this.initCarousel();
  }

  ngOnChanges(){
    if(this.slides.length > 0){
      this.currentSlide = this.slides[0];  
    }
  }

  public initCarousel(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,         
      keyboard: true,
      navigation: false,
      pagination: false,
      grabCursor: true,        
      loop: true,
      preloadImages: false,
      lazy: true,     
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    }
  }

  ngOnDestroy(){  
    setTimeout(() => {
      this.settings.contentOffsetToTop = false;
    });  
  }
  
  public onIndexChange(index: number) {  
    this.currentSlide = this.slides[index];
  }
}