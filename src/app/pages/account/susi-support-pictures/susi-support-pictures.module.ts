import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportPicturesComponent, SusiPicturesListAddDialog } from './susi-support-pictures.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportPicturesComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportPicturesComponent, 
    SusiPicturesListAddDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportPicturesModule { }
