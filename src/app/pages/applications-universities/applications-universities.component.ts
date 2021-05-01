import { Component, OnInit } from '@angular/core';
import { Pagination, Series } from 'src/app/app.models';
import { AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-applications-universities',
  templateUrl: './applications-universities.component.html',
  styleUrls: ['./applications-universities.component.scss']
})
export class ApplicationsUniversitiesComponent implements OnInit {
  public seriesList: Series[];
  public viewType: string = 'grid';
  public viewCol: number = 25;
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
        return solution.universities == true;
      });

    })
  }

}
