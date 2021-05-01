import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from 'src/app/app.service';
import { SusiPartnerDataService } from '../../core/services/data-services/susi-partner-data.service'
import { SUSIPartnerDto } from '../../core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-susi-partner-carousel',
  templateUrl: './susi-partner-carousel.component.html',
  styleUrls: ['./susi-partner-carousel.component.scss']
})
export class SusiPartnerCarouselComponent implements OnInit {
  // public partners: SUSIPartnerDto[];
  public partners: any[];
  public config: SwiperConfigInterface = { };
  
  constructor(
    public appService: AppService,
    public susiPartnerDataService: SusiPartnerDataService
    ) {
        // this.susiPartnerDataService.get().pipe(tap(data => {
        //   this.partners = data;
        // })).subscribe();  

        this.partners = this.appService.getPartners();
     }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.config = {
      observer: false,
      loopFillGroupWithBlank: true,
      slidesPerView: 8,
      slidesPerGroup: 8,
      spaceBetween: 16,       
      keyboard: true,
      navigation: false,
      pagination: false,
      grabCursor: true,        
      loop: true,
      preloadImages: false,
      lazy: true,  
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 1000,
      effect: "slide",
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        600: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        960: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
        1280: {
          slidesPerView: 5,
          slidesPerGroup: 5
        },
        1500: {
          slidesPerView: 6,
          slidesPerGroup: 6
        }
      }
    }
  }

}