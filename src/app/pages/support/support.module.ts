import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SupportComponent } from './support.component';
import { PicturesComponent } from './pictures/pictures.component';
import { VideosComponent } from './videos/videos.component';
import { LiteratureComponent } from './literature/literature.component';
import { PictureGalleryComponent } from './pictures/picture-gallery/picture-gallery.component';
import { LiteraturePdfComponent } from './literature/literature-pdf/literature-pdf.component';
import { ThreeSixtyViewsComponent } from './three-sixty-views/three-sixty-views.component';
import { CustomersComponent } from './customers/customers.component';

import { BrochuresComponent } from './brochures/brochures.component';
import { BrochuresPdfComponent } from './brochures/brochures-pdf/brochures-pdf.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { CaseStudyPdfComponent } from './case-studies/case-study-pdf/case-study-pdf.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { DrawingsPdfComponent } from './drawings/drawings-pdf/drawings-pdf.component';
import { InstallationGuidesComponent } from './installation-guides/installation-guides.component';
import { InstallsationGuidesPdfComponent } from './installation-guides/installsation-guides-pdf/installsation-guides-pdf.component';
import { SelectionGuidesComponent } from './selection-guides/selection-guides.component';
import { SelectionGuidesPdfComponent } from './selection-guides/selection-guides-pdf/selection-guides-pdf.component';
import { SlideShowsComponent } from './slide-shows/slide-shows.component';
import { SlideShowsPdfComponent } from './slide-shows/slide-shows-pdf/slide-shows-pdf.component';
import { WiringDiagramComponent } from './wiring-diagram/wiring-diagram.component';
import { WiringDiagramPdfComponent } from './wiring-diagram/wiring-diagram-pdf/wiring-diagram-pdf.component';
import { VideoWatchComponent } from './videos/video-watch/video-watch.component';
import { PictureItemComponent } from './pictures/picture-item/picture-item.component';


export const routes = [
  { 
    path: '', 
    component: SupportComponent, children: [
      { path: '', redirectTo: 'selection-guides', pathMatch: 'full' }, 
      { path: 'brochures', component: BrochuresComponent },
      { path: 'brochures-pdf/:file', component: BrochuresPdfComponent },
      { path: 'case-studies', component: CaseStudiesComponent },
      { path: 'case-studies-pdf/:file', component: CaseStudyPdfComponent },
      { path: 'drawings', component: DrawingsComponent },
      { path: 'drawings-pdf/:file', component: DrawingsPdfComponent },
      { path: 'install-guides', component: InstallationGuidesComponent },
      { path: 'install-guides-pdf/:file', component: InstallsationGuidesPdfComponent },
      { path: 'selection-guides', component: SelectionGuidesComponent },
      { path: 'selection-guides-pdf/:file', component: SelectionGuidesPdfComponent },
      { path: 'slide-shows', component: SlideShowsComponent },
      { path: 'slide-shows-pdf/:file', component: SlideShowsPdfComponent },
      { path: 'wiring-diagrams', component: WiringDiagramComponent },
      { path: 'wiring-diagrams-pdf/:file', component: WiringDiagramPdfComponent },
      { path: 'three-sixty-views', component: ThreeSixtyViewsComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'video-watch/:file', component: VideoWatchComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'pictures', component: PicturesComponent },
      { path: 'literature', component: LiteratureComponent },
      { path: 'gallery/:id', component: PictureGalleryComponent },
      // { path: 'pictures', loadChildren: () => import('./pictures/pictures.module').then(m => m.PicturesModule) },

    ]
  }
];

@NgModule({
  declarations: [
    BrochuresComponent, 
    BrochuresPdfComponent, 
    CaseStudiesComponent, 
    CaseStudyPdfComponent, 
    InstallationGuidesComponent, 
    InstallsationGuidesPdfComponent, 
    SelectionGuidesComponent, 
    SelectionGuidesPdfComponent, 
    SlideShowsComponent, 
    SlideShowsPdfComponent, 
    WiringDiagramComponent, 
    WiringDiagramPdfComponent, 
    SupportComponent, 
    PicturesComponent, 
    VideosComponent, 
    LiteratureComponent, 
    PictureGalleryComponent, 
    DrawingsComponent, 
    DrawingsPdfComponent, 
    LiteraturePdfComponent, 
    ThreeSixtyViewsComponent, 
    CustomersComponent, 
    VideoWatchComponent, 
    PictureItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SupportModule { }