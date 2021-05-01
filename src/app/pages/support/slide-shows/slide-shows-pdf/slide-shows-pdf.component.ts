import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slide-shows-pdf',
  templateUrl: './slide-shows-pdf.component.html',
  styleUrls: ['./slide-shows-pdf.component.scss']
})
export class SlideShowsPdfComponent implements OnInit {
  private sub: any;
  public src: any;
  
  constructor(
    public appService:AppService, 
    private activatedRoute: ActivatedRoute,
  ) { 
    this.sub = this.activatedRoute.params.subscribe(params => { 
      this.src = params['file'];
      console.log(`filename: ${this.src}`);
    });

  }

  ngOnInit(): void {
    // this.src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';


  }

}

