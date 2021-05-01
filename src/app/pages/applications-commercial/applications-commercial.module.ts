import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationsCommercialComponent } from './applications-commercial.component';

export const routes = [
  { path: '', component: ApplicationsCommercialComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [ApplicationsCommercialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ApplicationsCommercialModule { }
