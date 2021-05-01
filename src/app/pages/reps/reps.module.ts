import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RepsComponent } from './reps.component';

export const routes = [
  { path: '', component: RepsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    RepsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule 
  ]
})
export class RepsModule { }
