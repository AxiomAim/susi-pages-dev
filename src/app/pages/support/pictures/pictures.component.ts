import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../app.service';
import { UtilService } from '../../../core/services/util/util.service';
import { tap } from 'rxjs/operators';
import { SusiAlbumDataService } from '../../../core/services/data-services/susi-album-data.service';
import { SUSIAlbumDto } from 'src/app/core/models/susi-album.model';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public galleries: SUSIAlbumDto[];
  public data: SUSIAlbumDto[];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public message: string;
  watcher: Subscription;

  constructor(
    public appService: AppService,
    public utilService: UtilService,
    private susiAlbumDataService: SusiAlbumDataService,
    public mediaObserver: MediaObserver
  ) {
    this.watcher = this.mediaObserver.media$.pipe(tap((change: MediaChange) => {
      // console.log(change)
      if (change.mqAlias == 'xs') {
        this.viewCol = 100;
      }
      else if (change.mqAlias == 'sm') {
        this.viewCol = 50;
      }
      else if (change.mqAlias == 'md') {
        this.viewCol = 33.3;
      }
      else {
        this.viewCol = 25;
      }

    })).subscribe();
  }

  ngOnInit(): void {
    this.getGalleries();
  }

  public getGalleries(){  
    this.susiAlbumDataService.get().pipe(tap(data => {
      this.galleries = data;
      this.data = data;
      console.log(`galleries: ${JSON.stringify(this.galleries, null, 2)}`)
      this.message = 'No Results Found';

    })).subscribe();

  }

  public applyFilter(filterValue: string) {
    const val = filterValue;
    this.galleries = this.data;
    if (val && val.trim() !== '') {
      this.galleries = this.galleries.filter(data => {
        return data.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }

}
