import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-watch',
  templateUrl: './video-watch.component.html',
  styleUrls: ['./video-watch.component.scss']
})
export class VideoWatchComponent implements OnInit {
  public sub: any;
  public src: any;


  constructor(
    public activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { 
    this.sub = this.activatedRoute.params.subscribe(params => { 
      this.src = params['file'];
      console.log(`filename: ${this.src}`);
    });

  }

  ngOnInit(): void {
  }

}
