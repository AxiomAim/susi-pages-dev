import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDto } from 'src/app/core/models/user.model';
import { UserDataService } from '../../../core/services/data-services/user-data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-susi-admin-user-list',
  templateUrl: './susi-admin-user-list.component.html',
  styleUrls: ['./susi-admin-user-list.component.scss']
})
export class SusiAdminUserListComponent implements OnInit {
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'createdAt' ];
  dataSource: MatTableDataSource<UserDto>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;  

  public users: UserDto[];
  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.userDataService.get().pipe(tap(data => {
      this.users = data;
      console.log(`users: ${JSON.stringify(this.users, null, 2)}`);
      if(data) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })).subscribe();
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
