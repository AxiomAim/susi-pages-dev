import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { AppService } from '../../../app.service';
import { UtilService } from '../../../core/services/util/util.service';
import { tap } from 'rxjs/operators';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { SUSISupportDto } from 'src/app/core/models/susi-support.model';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { ThreeSixtyViews } from 'src/app/core/models/susi-support.model';

@Component({
  selector: 'app-three-sixty-views',
  templateUrl: './three-sixty-views.component.html',
  styleUrls: ['./three-sixty-views.component.scss']
})
export class ThreeSixtyViewsComponent implements OnInit {
  displayedColumns: string[] = ['partner', 'type', 'part', 'actions' ];
  dataSource: MatTableDataSource<ThreeSixtyViews>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public settings: SUSIPartnerDto;

  constructor(
    public appService: AppService,
    public appSettings: AppSettings, 
    public utilService: UtilService,
    private susiSupportDataService: SusiSupportDataService

  ) { 

    this.appSettings.settings$.pipe(tap(settings => {
      this.settings = settings;

      this.susiSupportDataService.getOne(this.settings.id).pipe(tap(data => {
        this.dataSource = new MatTableDataSource(data.threeSixtyViews);
        console.log(`support: ${JSON.stringify(data, null, 2)}`);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })).subscribe();

    })).subscribe();

  }

  ngOnInit(): void {
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

