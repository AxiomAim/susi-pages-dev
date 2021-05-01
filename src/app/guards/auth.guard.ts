import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService, AuthInfo } from '../core/services/firestore/firebase-authentication.service'
import { UserDataService } from '../core/services/data-services/user-data.service';
import { UserDto, UserModel } from '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public loginUser: any;
  public user: UserDto;

  constructor(
    public authenticationService: AuthenticationService, 
    public userDataService: UserDataService,
    public router: Router
    ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return new Promise<boolean>((resolve, reject) => {
        this.user = UserModel.emptyDto();
        this.authenticationService.authInfo$.pipe(tap(user => {
          if (user.$uid) {
            resolve(true);
          } else {
             this.router.navigate(['']);
             resolve(false);
            }
        })).subscribe();  
      });
  
      // return this.authService.checkAuth().then(loginUser => {
      //   this.loginUser = loginUser;
      //    if(this.loginUser) {
      //      return true;
      //    } else {
      //      this.router.navigate(['']);
      //      return false;
      //    }
      //  });

    }
  }
