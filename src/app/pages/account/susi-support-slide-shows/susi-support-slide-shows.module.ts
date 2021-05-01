import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportSlideShowsComponent } from './susi-support-slide-shows.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportSlideShowsComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportSlideShowsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportSlideShowsModule { }
