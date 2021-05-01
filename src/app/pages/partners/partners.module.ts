import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PartnersComponent } from './partners.component';

export const routes = [
  { path: '', component: PartnersComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PartnersModule { }