import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiSupportComponent } from './susi-support.component';
import { SusiSupportAddDialog } from './susi-support.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiSupportComponent, pathMatch: 'full'  }
];


@NgModule({
  declarations: [
    SusiSupportComponent,
    SusiSupportAddDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})


export class SusiSupportModule { }
