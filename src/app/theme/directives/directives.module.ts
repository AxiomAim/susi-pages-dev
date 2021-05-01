import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
import { DndDirective } from './dnd.directive';
import { DropzoneDirective } from './dropzone.directive';
// import { MaterialElevationDirectiveDirective } from './material-elevation-directive.directive';

@NgModule({
  declarations: [
    OnlyNumberDirective,
    DndDirective,
    DropzoneDirective,
    // MaterialElevationDirectiveDirective
  ],
  exports: [
    OnlyNumberDirective,
    DndDirective,
    DropzoneDirective,
    // MaterialElevationDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
