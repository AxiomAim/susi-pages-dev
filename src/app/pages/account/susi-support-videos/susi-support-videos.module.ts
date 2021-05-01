import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportVideosComponent, SusiSupportVideosAddDialog } from './susi-support-videos.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportVideosComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportVideosComponent,
    SusiSupportVideosAddDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportVideosModule { }