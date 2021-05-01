import { Component, OnInit, Input } from '@angular/core';
import { SocialLinks, SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {
  // @Input() settings: SUSIPartnerDto;
  @Input() iconSize:string = '';
  @Input() iconColor:string = '';
  public socialLinks: any;
  constructor() {
   }

  ngOnInit() {
    // this.socialLinks = this.settings.socialLinks;
    // alert(`${JSON.stringify(this.settings.socialLinks, null, 2)}`);    
  }

}
