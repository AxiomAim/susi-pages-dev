import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SusiConfirmDialogModel } from './susi-confirm-dialog.model';

@Component({
  selector: 'app-susi-confirm-dialog',
  templateUrl: './susi-confirm-dialog.component.html',
  styleUrls: ['./susi-confirm-dialog.component.scss']
})
export class SusiConfirmDialogComponent implements OnInit {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<SusiConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SusiConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
