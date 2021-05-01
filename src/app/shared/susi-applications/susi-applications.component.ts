import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-susi-applications',
  templateUrl: './susi-applications.component.html',
  styleUrls: ['./susi-applications.component.scss']
})
export class SusiApplicationsComponent implements OnInit {
  public applications;
  public config: SwiperConfigInterface = { };
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.applications = this.appService.getApplications();
  }

  // ngAfterViewInit(){
  //   this.config = {
  //     observer: true,
  //     slidesPerView: 4,
  //     spaceBetween: 16,       
  //     keyboard: true,
  //     navigation: true,
  //     pagination: false,
  //     grabCursor: true,        
  //     loop: false,
  //     preloadImages: false,
  //     lazy: true,  
  //     centeredSlides: false,
  //     breakpoints: {
  //       600: {
  //         slidesPerView: 1,
  //       },
  //       960: {
  //         slidesPerView: 2,
  //       },
  //       1280: {
  //         slidesPerView: 3,
  //       }
  //     }
  //   }
  // }

  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,       
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true,  
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    }
  }

}
