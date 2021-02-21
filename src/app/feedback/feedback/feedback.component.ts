import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FeedbackService} from '../../core/feedback/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  lottieConfig;
  rating: number;

  constructor(
    public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private feedbackService: FeedbackService) {}


  ngOnInit(): void {
    this.lottieConfig = {
      path: 'https://res.cloudinary.com/knowgas/raw/upload/v1613933738/Know%20Gas/Animations/feedback_j5tdwf.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  close(): void {
    this.dialogRef.close();
  }

  sendFeedback(feedback: string): void {
    this.feedbackService.addFeedback({ feedback, rating: this.rating }).then( value => {
      this.close();
    });
  }
}
