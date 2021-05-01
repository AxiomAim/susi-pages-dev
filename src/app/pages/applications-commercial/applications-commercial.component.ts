import { Component, OnInit } from '@angular/core';
import { Pagination, Series } from 'src/app/app.models';
import { AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-applications-commercial',
  templateUrl: './applications-commercial.component.html',
  styleUrls: ['./applications-commercial.component.scss']
})
export class ApplicationsCommercialComponent implements OnInit {
  public seriesList: Series[];
  public viewType: string = 'grid';
  public viewCol: number = 100;
  public count: number = 8;

  constructor(
    private appSettings: AppSettings,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getSeries(); 
  }

  public getSeries(){  
    this.appService.getSeries().subscribe(data => {      
      this.seriesList = data;

      this.seriesList = this.seriesList.filter(solution => {
        return solution.commercial == true;
      });

    })
  }

}
