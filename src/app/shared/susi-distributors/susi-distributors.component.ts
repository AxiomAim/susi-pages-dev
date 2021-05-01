import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from 'src/app/app.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-susi-distributors',
  templateUrl: './susi-distributors.component.html',
  styleUrls: ['./susi-distributors.component.scss']
})
export class SusiDistributorsComponent implements OnInit {
  public distributors;

  constructor(
    public appService:AppService,
    public matDialog: MatDialog,

  ) {
    
   }

  ngOnInit(): void {
    this.distributors = this.appService.getDistributors();
    console.log(JSON.stringify(this.distributors, null, 2));
  }

  openDialog(dist: any): void {
    const dialogRef = this.matDialog.open(SusiDistributorsDialogComponent, {
      width: '400px',
      data: {
        dist
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'susi-distributors-dialog.component',
  templateUrl: 'susi-distributors-dialog.component.html',
})
export class SusiDistributorsDialogComponent {

  public dist: any;

  constructor(
    public dialogRef: MatDialogRef<SusiDistributorsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.dist = data.dist;

    }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmitForm() {
  }

}
