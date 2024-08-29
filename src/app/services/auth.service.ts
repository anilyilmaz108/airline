import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInAnonymously, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fbAuth = inject(Auth);
  private router = inject(Router);

  constructor() { }

  fbLogin(email: string, password: string) {
    signInWithEmailAndPassword(this.fbAuth, email, password)
      .then((data) => console.info('😎', data.user?.uid))
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

  async logout() {
 
    await signOut(this.fbAuth);
    this.router.navigateByUrl('/');
  }
}
