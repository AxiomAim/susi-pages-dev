import { Component, OnInit, Input, ViewChild, SimpleChange } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper'; 
import { SUSIAlbumDto } from '../../../../core/models/susi-album.model';
import { AppSettings } from '../../../../app.settings';

import { AppService } from '../../../../app.service'; 
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.scss']
})
export class PictureItemComponent implements OnInit {
  @Input() gallery: SUSIAlbumDto;
  @Input() viewType: string = "grid";
  @Input() viewColChanged: boolean = false; 
  @Input() fullWidthPage: boolean = true;   
  public column:number = 4;
  // public address:string; 
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public config: SwiperConfigInterface = {};
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public settings: SUSIPartnerDto;
  constructor(
    public appSettings:AppSettings, 
    public appService:AppService
    ) {
    this.appSettings.settings$.pipe(tap(settings => {
      this.settings = settings;
    })).subscribe();

  }

  ngOnInit() { }

  ngAfterViewInit(){
    this.initCarousel();
    // this.appService.getAddress(this.product.location.lat, this.product.location.lng).subscribe(data=>{
    //   console.log(data['results'][0]['formatted_address']);
    //   this.address = data['results'][0]['formatted_address'];
    // })
  } 
 
  ngOnChanges(changes: {[propKey: string]: SimpleChange}){  
    if(changes.viewColChanged){
      this.getColumnCount(changes.viewColChanged.currentValue);
      if(!changes.viewColChanged.isFirstChange()){
        if(this.gallery.images.length > 1){     
           this.directiveRef.update();  
        } 
      }
    } 

    for (let propName in changes) {      
      // let changedProp = changes[propName];
      // if (!changedProp.isFirstChange()) {
      //   if(this.property.gallery.length > 1){
      //     this.initCarousel();
      //     this.config.autoHeight = true;       
      //     this.directiveRef.update();  
      //   }       
      // }      
    }  
  }

  public getColumnCount(value){
    if(value == 25){
      this.column = 4;
    }
    else if(value == 33.3){
      this.column = 3;
    }
    else if(value == 50){
      this.column = 2
    }
    else{
      this.column = 1;
    }
  }

  public initCarousel(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,         
      keyboard: false,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,        
      loop: true,
      preloadImages: false,
      lazy: true,  
      nested: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false
      // },
      speed: 500,
      effect: "slide"
    }
  }

  

  // public addToCompare(){
  //   this.appService.addToCompare(this.product, CompareOverviewComponent, (this.settings.rtl) ? 'rtl':'ltr'); 
  // }

  public onCompare(){
    // return this.appService.Data.compareList.filter(item=>item.id == this.gallery.id)[0];
  }

  // public addToFavorites(){
  //   this.appService.addToFavorites(this.product, (this.settings.rtl) ? 'rtl':'ltr');
  // }

  public onFavorites(){
    // return this.appService.Data.favorites.filter(item=>item.id == this.gallery.id)[0];
  }


}
