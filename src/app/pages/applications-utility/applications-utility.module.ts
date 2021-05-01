import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationsUtilityComponent } from './applications-utility.component';

export const routes = [
  { path: '', component: ApplicationsUtilityComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [ApplicationsUtilityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ApplicationsUtilityModule { }
