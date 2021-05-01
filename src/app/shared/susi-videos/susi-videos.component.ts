import { Component, OnInit } from '@angular/core';
// import { Gallery, GalleryRef } from 'ng-gallery';
import { AppService } from '../../app.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Gallery, GalleryRef } from 'ng-gallery';

@Component({
  selector: 'app-susi-videos',
  templateUrl: './susi-videos.component.html',
  styleUrls: ['./susi-videos.component.scss']
})
export class SusiVideosComponent implements OnInit {
  galleryId = 'mixedExample';
  youtubes: any[];

  constructor(
    private gallery: Gallery,
    private appService: AppService
  ) { 

  }

  ngOnInit(): void {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    this.youtubes = this.appService.getYouTubes();

    for (var yt of this.youtubes) {
      galleryRef.addYoutube(
        {
          src: yt.src
        }
      );
    }
  }

}
