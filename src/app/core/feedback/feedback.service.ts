import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

interface FeedBack {
  feedback: string;
  rating: number;
}


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  addFeedback(feedbackInf: FeedBack){
    return this.db.list('feedback').push(feedbackInf);
  }
}
