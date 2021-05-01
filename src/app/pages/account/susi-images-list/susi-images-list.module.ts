import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiImagesListComponent } from './susi-images-list.component';
import { SusiImageListAddDialog } from './susi-images-list.component';
import { SharedModule } from '../../../shared/shared.module';


export const routes = [
  { path: '', component: SusiImagesListComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiImagesListComponent,
    SusiImageListAddDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})

export class SusiImagesListModule { }
