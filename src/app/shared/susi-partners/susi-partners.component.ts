import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-susi-partners',
  templateUrl: './susi-partners.component.html',
  styleUrls: ['./susi-partners.component.scss']
})
export class SusiPartnersComponent implements OnInit {
  public partners;

  constructor(
    public appService:AppService
  ) {
    
   }

  ngOnInit(): void {
    this.partners = this.appService.getPartners();
    console.log(JSON.stringify(this.partners, null, 2));
  }

}
