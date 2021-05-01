import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../../guards/auth.guard';
import { InputFileModule } from 'ngx-input-file';
import { SusiPartnerSubmitComponent } from './susi-partner-submit/susi-partner-submit.component';
import { SusiPartnerEditComponent } from './susi-partner-edit/susi-partner-edit.component';
import { SusiImagesEditComponent } from './susi-images-edit/susi-images-edit.component';
import { SusiImagesUploadComponent } from './susi-images-upload/susi-images-upload.component';
import { SusiConfirmDialogComponent } from './susi-confirm-dialog/susi-confirm-dialog.component';

//providers
import { KeyObject} from '../../theme/pipes/keyObject.pipe';

export const routes = [
  { 
    path: '', 
    component: AccountComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, 
      { path: 'susi-partners-list', loadChildren: () => import('./susi-partner-list/susi-partner-list.module').then(m => m.SusiPartnerListModule), canActivate: [AuthGuard], data: { breadcrumb: 'Partners' } },
      { path: 'susi-partner-submit', component: SusiPartnerSubmitComponent },
      { path: 'susi-partner-edit/:id', component: SusiPartnerEditComponent },
      { path: 'susi-images-list', loadChildren: () => import('./susi-images-list/susi-images-list.module').then(m => m.SusiImagesListModule), canActivate: [AuthGuard], data: { breadcrumb: 'Image Gallery' } },
      { path: 'susi-support', loadChildren: () => import('./susi-support/susi-support.module').then(m => m.SusiSupportModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Objects' } },
      { path: 'susi-images-edit/:id', component: SusiImagesEditComponent },
      { path: 'susi-images-upload', component: SusiImagesUploadComponent },
      { path: 'profile', component: ProfileComponent },
      // Support
      { path: 'susi-support', loadChildren: () => import('./susi-support/susi-support.module').then(m => m.SusiSupportModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support' } },
      { path: 'susi-support-brochures/:id', loadChildren: () => import('./susi-support-brochures/susi-support-brochures.module').then(m => m.SusiSupportBrochuresModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Brochures' } },
      { path: 'susi-support-case-studies/:id', loadChildren: () => import('./susi-support-case-studies/susi-support-case-studies.module').then(m => m.SusiSupportCaseStudiesModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Case Studies' } },
      { path: 'susi-support-installation-guides/:id', loadChildren: () => import('./susi-support-installation-guides/susi-support-installation-guides.module').then(m => m.SusiSupportInstallationGuidesModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Installation Guides' } },
      { path: 'susi-support-selection-guides/:id', loadChildren: () => import('./susi-support-selection-guides/susi-support-selection-guides.module').then(m => m.SusiSupportSelectionGuidesModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Selection Guides' } },
      { path: 'susi-support-pictures/:id', loadChildren: () => import('./susi-support-pictures/susi-support-pictures.module').then(m => m.SusiSupportPicturesModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Pictures' } },
      { path: 'susi-support-pictures-edit/:index', loadChildren: () => import('./susi-support-pictures-edit/susi-support-pictures-edit.module').then(m => m.SusiSupportPicturesEditModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Pictures Edit' } },
      { path: 'susi-support-slide-shows/:id', loadChildren: () => import('./susi-support-slide-shows/susi-support-slide-shows.module').then(m => m.SusiSupportSlideShowsModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Slide Shows' } },
      { path: 'susi-support-user-drawings/:id', loadChildren: () => import('./susi-support-user-drawings/susi-support-user-drawings.module').then(m => m.SusiSupportUserDrawingsModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support User Drawings' } },
      { path: 'susi-support-videos/:id', loadChildren: () => import('./susi-support-videos/susi-support-videos.module').then(m => m.SusiSupportVideosModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Videos' } },
      { path: 'susi-support-wiring-diagrams/:id', loadChildren: () => import('./susi-support-wiring-diagrams/susi-support-wiring-diagrams.module').then(m => m.SusiSupportWiringDiagramsModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Wiring Diagrams' } },
      { path: 'susi-support-three-sixty-views/:id', loadChildren: () => import('./susi-support-three-sixty-views/susi-support-three-sixty-views.module').then(m => m.SusiSupportThreeSixtyViewsModule), canActivate: [AuthGuard], data: { breadcrumb: 'Support Three Sixty Views' } },
      // Admin
      { path: 'susi-admin-user-list', loadChildren: () => import('./susi-admin-user-list/susi-admin-user-list.module').then(m => m.SusiAdminUserListModule), canActivate: [AuthGuard], data: { breadcrumb: 'Users' } },
    ]
  }
];

@NgModule({
  declarations: [
    AccountComponent,  
    ProfileComponent, 
    SusiPartnerEditComponent, 
    SusiImagesEditComponent, 
    SusiImagesUploadComponent, 
    SusiConfirmDialogComponent, 
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule,
  ],
  providers: [
    KeyObject
  ]
})
export class AccountModule { }
