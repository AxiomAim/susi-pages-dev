import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html'
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() logoUrl: string = '';
  constructor(public appService:AppService) { 

  }

  ngOnInit() {

  }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }
}