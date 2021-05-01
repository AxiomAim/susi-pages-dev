import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportBrochuresComponent } from './susi-support-brochures.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportBrochuresComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportBrochuresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SusiSupportBrochuresModule { }
