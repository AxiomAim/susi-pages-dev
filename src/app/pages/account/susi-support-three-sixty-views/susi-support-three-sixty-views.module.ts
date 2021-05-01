import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportThreeSixtyViewsComponent, SusiSupportThreeSixtyViewsAddDialog } from './susi-support-three-sixty-views.component';
import { SharedModule } from '../../../shared/shared.module';


export const routes = [
  { path: '', component: SusiSupportThreeSixtyViewsComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportThreeSixtyViewsComponent,
    SusiSupportThreeSixtyViewsAddDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportThreeSixtyViewsModule { }