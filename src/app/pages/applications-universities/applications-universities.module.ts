import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ApplicationsUniversitiesComponent } from './applications-universities.component';

export const routes = [
  { path: '', component: ApplicationsUniversitiesComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [ApplicationsUniversitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ApplicationsUniversitiesModule { }
