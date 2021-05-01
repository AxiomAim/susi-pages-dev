import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SUSISupportDto, SUSISupportModel } from 'src/app/core/models/susi-support.model';
import { SusiSupportDataService } from '../../../core/services/data-services/susi-support-data.service';
import { tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SusiConfirmDialogComponent } from '../susi-confirm-dialog/susi-confirm-dialog.component';
import { SusiConfirmDialogModel } from '../susi-confirm-dialog/susi-confirm-dialog.model';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-susi-support-case-studies',
  templateUrl: './susi-support-case-studies.component.html',
  styleUrls: ['./susi-support-case-studies.component.scss']
})
export class SusiSupportCaseStudiesComponent implements OnInit {
  public sub: any;
  public supportId: any = 'susiadaptors.com';
  public supportCategory: any = 'caseStudies';
  public support: SUSISupportDto = SUSISupportModel.emptyDto();
  public caseStudies: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private susiSupportDataService: SusiSupportDataService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.supportId = params["id"];
      console.log(`supportId: ${JSON.stringify(this.supportId, null, 2)}`);
      this.susiSupportDataService.getOne(this.supportId).pipe(tap(res => {
        this.support = res;
        this.caseStudies = this.support.caseStudies;
      })).subscribe();
    });    

  }

  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  remove(caseStudies): void {
    const message = `Are you sure you want to do this?`;

    const dialogData = new SusiConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.matDialog.open(SusiConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.support.caseStudies = this.support.caseStudies.filter(obj => obj !== caseStudies);
        this.susiSupportDataService.update(this.support).then(() => { });
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.support.caseStudies, event.previousIndex, event.currentIndex);
    this.susiSupportDataService.update(this.support).then(res => {
      this.ngOnInit();
    });
  }

}

