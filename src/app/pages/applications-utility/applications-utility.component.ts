import { Component, OnInit } from '@angular/core';
import { Pagination, Series } from 'src/app/app.models';
import { AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';

@Component({
  selector: 'app-applications-utility',
  templateUrl: './applications-utility.component.html',
  styleUrls: ['./applications-utility.component.scss']
})
export class ApplicationsUtilityComponent implements OnInit {
  public seriesList: Series[];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public count: number = 8;

  public settings: SUSIPartnerDto;
  public pagination:Pagination = new Pagination(1, 8, null, 2, 0, 0); 
  public message: any;
  public sort: string;
  public searchFields: any;

  constructor(
    private appSettings: AppSettings,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getSeries(); 
  }

  public getSeries(){  
    this.appService.getSeries().subscribe(data => {      
      this.seriesList = data;

      this.seriesList = this.seriesList.filter(solution => {
        return solution.utility == true;
      });

    })
  }

  // public getSeries(){  
  //   //console.log('get properties by : ', this.searchFields);  
  //   this.appService.getSeries().subscribe(data => {      
  //     if(this.seriesList && this.seriesList.length > 0){  
  //       this.settings.loadMore.page++;
  //       this.pagination.page = this.settings.loadMore.page; 
  //     }
  //     let result = this.filterData(data); 
  //     if(result.data.length == 0){
  //       this.seriesList.length = 0;
  //       this.pagination = new Pagination(1, this.count, null, 2, 0, 0);  
  //       this.message = 'No Results Found';
  //       return false;
  //     } 
  //     if(this.seriesList && this.seriesList.length > 0){  
  //       this.seriesList = this.seriesList.concat(result.data);          
  //     }
  //     else{
  //       this.seriesList = result.data;  
  //     }
  //     this.pagination = result.pagination;
  //     this.message = null;

  //     if(this.seriesList.length == this.pagination.total){
  //       this.settings.loadMore.complete = true;
  //       this.settings.loadMore.result = this.seriesList.length;
  //     }
  //     else{
  //       this.settings.loadMore.complete = false;
  //     }
  //   })
  // }

  public filterData(data){
    return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
  }

}
