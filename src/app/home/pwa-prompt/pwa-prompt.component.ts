import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-pwa-prompt',
  templateUrl: './pwa-prompt.component.html',
  styleUrls: ['./pwa-prompt.component.css']
})
export class PwaPromptComponent implements OnInit {
  lottieConfig: object;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mobileType: 'ios' | 'android', promptEvent?: any },
    private dialogRef: MatDialogRef<PwaPromptComponent>
  ) {
  }

  ngOnInit(): void {
    this.lottieConfig = {
      path: 'https://res.cloudinary.com/knowgas/raw/upload/v1614011521/Know%20Gas/Animations/Download_ruzbfx.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close(): void {
    this.dialogRef.close();
  }

}
