import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInAnonymously, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fbAuth = inject(Auth);
  private router = inject(Router);
  userSignal = signal<any | null>(null);
  
  constructor() { }

  fbLogin(email: string, password: string) {
    signInWithEmailAndPassword(this.fbAuth, email, password)
      .then((data) => {
        console.info('😎', data.user?.uid);
        this.userSignal.set(data.user);
        this.router.navigateByUrl('/');
        // console.log(this.userSignal());
      })
      .catch(() => {
        console.warn('FB Auth Error!');
        this.fbAnonymousLogin();
      });
  }

  fbAnonymousLogin() {
    signInAnonymously(this.fbAuth)
      .then(() => {
        console.log('😎');
      })
      .catch((err) => console.log('FB Anonymous Error!', err));
  }

  fbRegister(email: string, password: string) {
    createUserWithEmailAndPassword(this.fbAuth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  fbResetPassword(email: string) {
    sendPasswordResetEmail(this.fbAuth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  logout() {
    signOut(this.fbAuth);
    this.router.navigateByUrl('/');
    this.userSignal.set(null);
  }

  fbOnStatusChange() {
    onAuthStateChanged(this.fbAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('User Status ID:', uid);
        console.log('User:', user);
        // ...
      } else {
        this.logout();
      }
    });
  }
}
