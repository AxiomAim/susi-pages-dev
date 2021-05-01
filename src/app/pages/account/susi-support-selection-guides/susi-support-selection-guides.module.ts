import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportSelectionGuidesComponent } from './susi-support-selection-guides.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportSelectionGuidesComponent, pathMatch: 'full'  }
];


@NgModule({
  declarations: [
    SusiSupportSelectionGuidesComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportSelectionGuidesModule { }