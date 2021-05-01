
import { Directive, HostListener, Output, EventEmitter, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective {

  @Output() dropped =  new EventEmitter<FileList>();
  @Output() hovered =  new EventEmitter<boolean>();

  // @HostBinding('style.background-color') private background = '#f5fcff'
  // @HostBinding('style.opacity') private opacity = '.1'

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
    // this.background = '#f5fcff'
    // this.opacity = '.1'

  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
    // this.background = '#9ecbec';
    // this.opacity = '0.2'
    
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
    // this.background = '#f5fcff'
    // this.opacity = '.1'

  }
}
