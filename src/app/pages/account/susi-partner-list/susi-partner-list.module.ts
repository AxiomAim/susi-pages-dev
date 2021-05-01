import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SusiPartnerListComponent } from './susi-partner-list.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiPartnerListComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [SusiPartnerListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SusiPartnerListModule { }
