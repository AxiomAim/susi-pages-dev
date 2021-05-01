import {Component, OnInit, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SUSIPartnerDto } from 'src/app/core/models/susi-partner.model';
import { DomSanitizer } from '@angular/platform-browser';


export interface link {
  id: number,
  name: string,
  url: string
}

@Component({
  selector: 'app-susi-media',
  templateUrl: './susi-media.component.html',
  styleUrls: ['./susi-media.component.scss']
})
export class SusiMediaComponent implements OnInit {
  @Input() settings: SUSIPartnerDto;
  
  pdfs: link[] = [
    {id: 1, name: 'Schneider-SUSI Selection Guide', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/600-2003-00-H_Sel_Guide_Schneider.pdf'},
    {id: 2, name: 'Schneider-SUSI Selection Guide', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/600-2003-00-H_Sel_Guide_Schneider.pdf'},
    {id: 3, name: 'Schneider-SUSI Selection Guide', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/600-2003-00-H_Sel_Guide_Schneider.pdf'},
    {id: 4, name: 'Schneider-SUSI Selection Guide', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/600-2003-00-H_Sel_Guide_Schneider.pdf'},
    {id: 5, name: 'Schneider-SUSI Selection Guide', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/600-2003-00-H_Sel_Guide_Schneider.pdf'}
  ];

  photos: link[] = [
    {id: 1, name: 'SWA (Flush Mount Adapter)', url: 'http://susiadapters.com/landing_pages/schneider_res/product_photos/new_meters_or_relays/Schneider/schneider_ION8500.jpg'},
    {id: 2, name: 'SWA (Flush Mount Adapter)', url: 'http://susiadapters.com/landing_pages/schneider_res/product_photos/new_meters_or_relays/Schneider/schneider_ION8500.jpg'},
    {id: 3, name: 'SWA (Flush Mount Adapter)', url: 'http://susiadapters.com/landing_pages/schneider_res/product_photos/new_meters_or_relays/Schneider/schneider_ION8500.jpg'},
    {id: 4, name: 'SWA (Flush Mount Adapter)', url: 'http://susiadapters.com/landing_pages/schneider_res/product_photos/new_meters_or_relays/Schneider/schneider_ION8500.jpg'},
    {id: 5, name: 'SWA (Flush Mount Adapter)', url: 'http://susiadapters.com/landing_pages/schneider_res/product_photos/new_meters_or_relays/Schneider/schneider_ION8500.jpg'},
  ];

  videos: link[] = [
    {id: 1, name: 'FT-21 to ION 8650 Retrofit', url: 'https://www.youtube.com/embed/L1DGAduB2Oc?rel=0'},
    {id: 2, name: 'FT-21 to ION 8650 Retrofit', url: 'https://www.youtube.com/embed/-6jDSIt8IQw?rel=0'},
    {id: 3, name: 'FT-21 to ION 8650 Retrofit', url: 'https://www.youtube.com/embed/dtvLOjEeQy4?rel=0'},
    {id: 4, name: 'FT-21 to ION 8650 Retrofit', url: 'https://www.youtube.com/embed/apNBjAjipNc?rel=0'},
  ];

  studies: link[] = [
    {id: 1, name: 'IOU', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/IOU_Schneider_Electric_case_study.pdf'},
    {id: 2, name: 'Large Industrial', url: 'http://susiadapters.com/landing_pages/schneider_res/literature/Large_Ind_Schneider_Electric_case_study.pdf'}
  ];
  
  constructor(
    public dialog: MatDialog,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
  }

  openPhotoDialog(data: any) {
    this.dialog.open(DialogPhoto, {
      data: data
    });
  }

  openVideoDialog(data: any) {
    this.dialog.open(DialogVideo, {
      data: data
    });
  }

}


@Component({
  selector: 'susi-media-photo-dialog',
  templateUrl: 'susi-media-photo-dialog.html',
})
export class DialogPhoto {
  constructor(@Inject(MAT_DIALOG_DATA) public data: link) {

    }
}

@Component({
  selector: 'susi-media-video-dialog',
  templateUrl: 'susi-media-video-dialog.html',
})
export class DialogVideo {
  constructor(@Inject(MAT_DIALOG_DATA) public data: link) {

    }
}