import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportPicturesEditComponent } from './susi-support-pictures-edit.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportPicturesEditComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportPicturesEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportPicturesEditModule { }
