import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import AuthService from '../model/service/AuthService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isLoggedIn !== true) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      this.router.navigate(['login']);
    }
    return true;
  }
}
