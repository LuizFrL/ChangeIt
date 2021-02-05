import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import auth from 'firebase/app';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<null>;
  isAdminUser$ = new BehaviorSubject(false);

  constructor(
    private angularAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user$ = angularAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.db.object(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      }));
    this.user$.subscribe(user => {
      if (user) {
        this.db.object(`admin`).valueChanges().subscribe(
          admins => {
            // @ts-ignore
            this.isAdminUser$.next(user.uid in admins);
          },
          error => {}
        );
      } else {
        this.isAdminUser$.next(false);
      }
    });
  }

  async googleSignin(): Promise<void> {
    const provider = new auth.auth.GoogleAuthProvider();
    const credential = await this.angularAuth.signInWithPopup(provider);
    await this.updateUserStatus(credential.user);
    await this.router.navigate(['']);
  }

  private async updateUserStatus(user): Promise<void> {
    const userRef = this.db.list(`users`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return await userRef.set(`${user.uid}`, data);

  }

  async logOut(): Promise<void> {
    await this.angularAuth.signOut();
    await this.router.navigate(['']);
  }

}
