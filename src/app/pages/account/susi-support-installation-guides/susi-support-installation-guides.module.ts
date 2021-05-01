import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportInstallationGuidesComponent } from './susi-support-installation-guides.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportInstallationGuidesComponent, pathMatch: 'full'  }
];


@NgModule({
  declarations: [
    SusiSupportInstallationGuidesComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),

  ]
})
export class SusiSupportInstallationGuidesModule { }
