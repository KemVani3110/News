import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  people: any
  constructor(public auth: Auth) {
      onAuthStateChanged(this.auth,(user)=>{
      if(user != null)
      {
        this.people = user;
      }else
      {
         this.people = null;
      }
    })
  }

  async login()
  {
    let provider = new GoogleAuthProvider();
    return await  signInWithPopup(this.auth,provider);
  }

  async logout()
  {
    await this.auth.signOut();
  }
}
