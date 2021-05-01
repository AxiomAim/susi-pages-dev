import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-susi-pdf',
  templateUrl: './susi-pdf.component.html',
  styleUrls: ['./susi-pdf.component.scss']
})
export class SusiPdfComponent implements OnInit {
  @Input() src: any;  
  public link: any;
  constructor() { }

  ngOnInit(): void {
  }

}
