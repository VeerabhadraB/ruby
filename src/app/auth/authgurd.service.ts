import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import * as authserviceService from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthgurdService implements CanActivate {

  constructor(private auth:authserviceService.AuthserviceService) { }
  canActivate(_route: ActivatedRouteSnapshot,_state: RouterStateSnapshot){
    return this.auth.isAuthenticated();
  }
    
}
