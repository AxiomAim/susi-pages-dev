import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationsIndustrialComponent } from './applications-industrial.component';

export const routes = [
  { path: '', component: ApplicationsIndustrialComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [ApplicationsIndustrialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})

export class ApplicationsIndustrialModule { }
