import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SusiPartnerDataService } from '../../../core/services/data-services/susi-partner-data.service';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { UtilService } from '../../../core/services/util/util.service';
import { MatDialog } from '@angular/material/dialog';
import { SusiConfirmDialogModel } from '../susi-confirm-dialog/susi-confirm-dialog.model';
import { SusiConfirmDialogComponent } from '../susi-confirm-dialog/susi-confirm-dialog.component';

@Component({
  selector: 'app-susi-partner-list',
  templateUrl: './susi-partner-list.component.html',
  styleUrls: ['./susi-partner-list.component.scss']
})
export class SusiPartnerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'title', 'actions' ];
  dataSource: MatTableDataSource<SUSIPartnerDto>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  

  constructor(
    public susiPartnerDataService: SusiPartnerDataService,
    public utilService: UtilService,
    public matDialog: MatDialog

  ) { 

  }

  ngOnInit(): void {
    this.susiPartnerDataService.get().subscribe(data => {
      if(data) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
          }
    });

  }

  viewPartner(item: any) {
    console.log(JSON.stringify(item, null, 2));
    this.utilService.navigate('/account/susi-partner-edit/' + item.id);
  }

  
  remove(partnerId: any): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.susiPartnerDataService.delete(partnerId).then(res => {
          this.ngOnInit();
        })
      }
    });
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
