import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputFileModule } from 'ngx-input-file';
import { SusiPartnerSubmitComponent } from './susi-partner-submit.component';
import { SharedModule } from '../../../shared/shared.module';

export const routes = [
  { path: '', component: SusiPartnerSubmitComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [SusiPartnerSubmitComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    InputFileModule
  ] 
})
export class SusiPartnerSubmitModule { }
