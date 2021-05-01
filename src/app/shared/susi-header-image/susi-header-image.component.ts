import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'
import { AppSettings } from '../../app.settings';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-susi-header-image',
  templateUrl: './susi-header-image.component.html',
  styleUrls: ['./susi-header-image.component.scss']
})
export class SusiHeaderImageComponent implements OnInit {
  @Input('backgroundImage') backgroundImage;
  @Input('bgImageAnimate') bgImageAnimate;
  @Input('contentOffsetToTop') contentOffsetToTop;
  @Input('contentMinHeight') contentMinHeight;
  @Input('title') title;
  @Input('desc') desc;
  @Input('isHomePage') isHomePage: boolean = false;
  public bgImage;
  public settings: SUSIPartnerDto;
  constructor(public appSettings:AppSettings, private sanitizer:DomSanitizer) {
    // this.settings = this.appSettings.settings;
    this.appSettings.settings$.pipe(tap(settings => {
      this.settings = settings;
    })).subscribe();

    setTimeout(() => {
      this.settings.headerBgImage = true;
    }); 
  }

  ngOnInit() {
    if(this.contentOffsetToTop){
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      }); 
    } 
    if(this.backgroundImage){
      this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url('+ this.backgroundImage +')'); 
    }
  }

  ngOnDestroy(){    
    setTimeout(() => {
      this.settings.headerBgImage = false; 
      this.settings.contentOffsetToTop = false;
    });  
  }

}
