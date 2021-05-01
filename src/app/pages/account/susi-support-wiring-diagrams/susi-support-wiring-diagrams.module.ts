import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportWiringDiagramsComponent } from './susi-support-wiring-diagrams.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportWiringDiagramsComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportWiringDiagramsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportWiringDiagramsModule { }

