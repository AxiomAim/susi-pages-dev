import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DistributorsComponent } from './distributors.component';

export const routes = [
  { path: '', component: DistributorsComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [DistributorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DistributorsModule { }
