import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../../core/feedback/feedback.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-feedbacks',
  templateUrl: './show-feedbacks.component.html',
  styleUrls: ['./show-feedbacks.component.css']
})
export class ShowFeedbacksComponent implements OnInit {
  feedbacks$: Observable<any[]>;

  constructor(
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
    this.feedbacks$ = this.feedbackService.getFeedbacks();
  }

}
