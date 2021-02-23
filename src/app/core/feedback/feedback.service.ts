import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface FeedBack {
  feedback: string;
  rating: number;
  userKey: string;
  date: number;
}


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private db: AngularFireDatabase
  ) {
  }

  addFeedback(feedbackInf: FeedBack): any {
    return this.db.list('feedbacks').push(feedbackInf);
  }

  getFeedbacks(): Observable<any[]> {
    return this.db.list('feedbacks').snapshotChanges().pipe(
      map(changes => {
        // @ts-ignore
        return changes.map( c => ({key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
}
