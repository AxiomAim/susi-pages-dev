import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportCaseStudiesComponent } from './susi-support-case-studies.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportCaseStudiesComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportCaseStudiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportCaseStudiesModule { }
