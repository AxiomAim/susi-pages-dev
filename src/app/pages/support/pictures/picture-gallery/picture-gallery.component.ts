import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Picture } from 'src/app/app.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture-gallery',
  templateUrl: './picture-gallery.component.html',
  styleUrls: ['./picture-gallery.component.scss']
})
export class PictureGalleryComponent implements OnInit {
  @Input() picture: Picture;
  private sub: any;
  public albumId: any;


  constructor(
    public appService:AppService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.sub = this.activatedRoute.params.subscribe(params => { 
      this.albumId = params['id'];
    });

  }

}
