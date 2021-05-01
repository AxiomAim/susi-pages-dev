import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-toolbar2',
  templateUrl: './toolbar2.component.html'
})
export class Toolbar2Component implements OnInit {
  @Input() logoUrl: string = '';
  // @Input() settings: SUSIPartnerDto;
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService:AppService) {

  }

  ngOnInit() {

  }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }
}