import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selection-guides-pdf',
  templateUrl: './selection-guides-pdf.component.html',
  styleUrls: ['./selection-guides-pdf.component.scss']
})
export class SelectionGuidesPdfComponent implements OnInit {
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

