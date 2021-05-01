import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportUserDrawingsComponent } from './susi-support-user-drawings.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportUserDrawingsComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    SusiSupportUserDrawingsComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiSupportUserDrawingsModule { }
