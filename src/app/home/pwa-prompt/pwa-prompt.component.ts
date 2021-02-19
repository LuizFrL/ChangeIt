import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-pwa-prompt',
  templateUrl: './pwa-prompt.component.html',
  styleUrls: ['./pwa-prompt.component.css']
})
export class PwaPromptComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mobileType: 'ios' | 'android', promptEvent?: any },
    private dialogRef: MatDialogRef<PwaPromptComponent>
  ) {}

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close(): void {
    this.dialogRef.close();
  }

}
