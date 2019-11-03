import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = environment.apiUrl + 'auth/';
jwtHelperService = new JwtHelperService();
jwtDecodeToken: any;

constructor(private httpClient: HttpClient) { }

login(model: any) {
  return this.httpClient.post(this.baseUrl + 'login', model)
            .pipe(
              map((response: any) => {
                const user = response;
                if (user) {
                  localStorage.setItem('token', user.token);
                  this.jwtDecodeToken = this.jwtHelperService.decodeToken(user.token);
                  console.log(this.jwtDecodeToken);
                }
              })
            );
  }

  register(model: any) {
    return this.httpClient.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelperService.isTokenExpired(token);
  }

}
