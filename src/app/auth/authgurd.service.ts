import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthserviceService } from './authservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthgurdService implements CanActivate {

  constructor(private auth:AuthserviceService) { }
  canActivate(_route: ActivatedRouteSnapshot,_state: RouterStateSnapshot){
    return this.auth.isAuthenticated();
  }
    
}
