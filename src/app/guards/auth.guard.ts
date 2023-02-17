import { onAuthStateChanged, user } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: any
  constructor(private AuthService: AuthService , private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise((resolve, reject) =>{

        onAuthStateChanged(this.AuthService.auth,(user)=>{
          if(user != null)
          {
            resolve(true);
            this.user = user;

          }else
          {
            window.alert('Hãy đăng nhập để sử dụng áp!!');
            resolve(false);

             this.user = null;
             this.router.navigate(['']);
          }

        })
      });
  }

}
