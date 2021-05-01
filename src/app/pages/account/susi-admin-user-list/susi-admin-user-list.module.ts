import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SusiAdminUserListComponent } from './susi-admin-user-list.component';

export const routes = [
  { path: '', component: SusiAdminUserListComponent, pathMatch: 'full'  }
];


@NgModule({
  declarations: [
    SusiAdminUserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SusiAdminUserListModule { }
