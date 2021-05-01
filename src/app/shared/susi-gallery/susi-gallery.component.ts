import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SUSIAlbumDto, SUSIAlbumModel } from 'src/app/core/models/susi-album.model';
import { SusiAlbumDataService } from '../../core/services/data-services/susi-album-data.service';
import { tap, map } from 'rxjs/operators';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-susi-gallery',
  templateUrl: './susi-gallery.component.html',
  styleUrls: ['./susi-gallery.component.scss']
})
export class SusiGalleryComponent implements OnInit {
  @Input() albumId: any;
  public album: SUSIAlbumDto = SUSIAlbumModel.emptyDto();
  public images: GalleryItem[] = [];
  public img: any;

  constructor(
    private susiAlbumDataService: SusiAlbumDataService
  ) { }

  ngOnInit(): void {

    this.susiAlbumDataService.getOne(this.albumId).pipe(tap(res => {
      this.album = res;
        for (var image of this.album.images) {
          const newImage: ImageItem = new ImageItem({
            src: `${image.img}`, thumb: `${image.img}`
          });          
          this.images = [...this.images, newImage];
        }  
        console.log(`images: ${JSON.stringify(this.images, null, 2)}`);
      })).subscribe();

  }

}
