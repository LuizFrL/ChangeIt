import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FeedbackService} from '../../core/feedback/feedback.service';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  lottieConfig;
  rating: number;
  private userKey: string;
  constructor(
    public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private feedbackService: FeedbackService,
    public userService: UserService) {}


  ngOnInit(): void {
    this.userService.user$.subscribe( user => {
      // @ts-ignore
      this.userKey = user.uid;
    });
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
    this.feedbackService.addFeedback({ feedback, rating: this.rating, userKey: this.userKey, date: Date.now() }).then( value => {
      this.close();
    });
  }
}
