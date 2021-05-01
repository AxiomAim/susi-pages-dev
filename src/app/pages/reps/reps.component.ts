import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.scss']
})
export class RepsComponent implements OnInit {
  public reps;
  
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.reps = this.appService.getReps();
  }

}
