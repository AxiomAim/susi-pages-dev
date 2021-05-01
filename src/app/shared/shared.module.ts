import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: false,
  suppressScrollX: true               
};
 
import { PipesModule } from '../theme/pipes/pipes.module';
import { DirectivesModule } from '../theme/directives/directives.module'; 

import { LoadMoreComponent } from './load-more/load-more.component';
import { LogoComponent } from './logo/logo.component';
import { SusiMediaComponent } from './susi-media/susi-media.component';
import { SusiEasyComponent } from './susi-easy/susi-easy.component';
import { SusiCustomersComponent } from './susi-customers/susi-customers.component';
import { MapComponent } from './map/map.component';
import { SusiPartnersComponent } from './susi-partners/susi-partners.component';
import { SusiPartnerCarouselComponent } from './susi-partner-carousel/susi-partner-carousel.component';

import { SusiGalleryComponent } from './susi-gallery/susi-gallery.component';
import { SusiVideosComponent } from './susi-videos/susi-videos.component';
 
import { GalleryModule } from 'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { SusiPdfComponent } from './susi-pdf/susi-pdf.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SusiBenefitsComponent } from './susi-benefits/susi-benefits.component';
import { SusiApplicationsComponent } from './susi-applications/susi-applications.component';
import { SusiDistributorsComponent, SusiDistributorsDialogComponent } from './susi-distributors/susi-distributors.component';

import { MaterialElevationDirective } from '../theme/directives/material-elevation-directive.directive';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

// import { SupportUploadComponent } from '../pages/account/support-upload/support-upload.component';
import { SusiGetInTouchComponent } from './susi-get-in-touch/susi-get-in-touch.component';
import { SusiHeaderCarouselComponent } from './susi-header-carousel/susi-header-carousel.component';
import { SusiHeaderImageComponent } from './susi-header-image/susi-header-image.component';
import { SusiSeriesItemComponent } from './susi-series-item/susi-series-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SwiperModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    PerfectScrollbarModule,
    PipesModule,
    DirectivesModule,
    // ThreeSixtyModule,
    GalleryModule,
    PdfViewerModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    SwiperModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    PerfectScrollbarModule,
    PipesModule,
    DirectivesModule, 
    LogoComponent,
    SusiHeaderImageComponent,
    SusiHeaderCarouselComponent,
    LoadMoreComponent,
    SusiGetInTouchComponent,
    SusiEasyComponent,
    SusiMediaComponent,
    SusiEasyComponent,
    SusiCustomersComponent,
    MapComponent,
    SusiSeriesItemComponent,
    SusiPartnersComponent,
    SusiDistributorsComponent,
    SusiDistributorsDialogComponent,
    SusiPartnerCarouselComponent,
    SusiGalleryComponent,
    SusiVideosComponent,
    SusiPdfComponent,
    SusiBenefitsComponent,
    SusiApplicationsComponent,
    MaterialElevationDirective,
    DragDropModule,
    ScrollingModule,
    CdkTableModule,
    CdkTreeModule,
    // SupportUploadComponent

  ],
  declarations: [ 
    LogoComponent,
    SusiHeaderImageComponent,
    SusiHeaderCarouselComponent,
    LoadMoreComponent,
    SusiGetInTouchComponent,
    SusiMediaComponent,
    SusiEasyComponent,
    SusiCustomersComponent,
    MapComponent,
    SusiSeriesItemComponent,
    SusiPartnersComponent,
    SusiDistributorsComponent,
    SusiDistributorsDialogComponent,
    SusiPartnerCarouselComponent,
    SusiGalleryComponent,
    SusiVideosComponent,
    SusiPdfComponent,
    SusiBenefitsComponent,
    SusiApplicationsComponent,
    MaterialElevationDirective,
    // SupportUploadComponent,
    SusiHeaderCarouselComponent,
    SusiHeaderImageComponent,
    SusiSeriesItemComponent
  ],
  entryComponents:[
  ],
  providers:[
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'contain',
        thumbPosition: 'bottom'
      }
    }
  ]
})
export class SharedModule { }
