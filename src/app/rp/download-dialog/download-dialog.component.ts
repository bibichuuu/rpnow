import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DownloadTxtService } from '../services/download-txt.service';
import { DownloadDocxService } from '../services/download-docx.service';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-download-dialog',
  templateUrl: 'download-dialog.html',
  styles: [],
  providers: [DownloadDocxService, DownloadTxtService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<DownloadDialogComponent>,
    private txtService: DownloadTxtService,
    private docxService: DownloadDocxService,
    public options: OptionsService
  ) { }

  cancel() {
    this.dialogRef.close(null);
  }
  
  printTxt() {
    this.txtService.downloadTxt(this.options.downloadOOC);
  }

  printDocx() {
    this.docxService.downloadDocx(this.options.downloadOOC);
  }

}
