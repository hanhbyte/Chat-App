import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserInterface} from "../../../model/user.interface";
import {Observable, tap} from "rxjs";
import {LoginResponseInterface} from "../../../model/login-response.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar, private jwtService: JwtHelperService) { }

  login(user: UserInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>('api/user/login', user).pipe(
      tap((res: LoginResponseInterface) => localStorage.setItem('chat_app', res.access_token)),
      tap(() => this.snackbar.open('Đăng nhập thành công', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      }))
    );
  }

  getLoggedInUser() {
    const decodeToken = this.jwtService.decodeToken();
    return decodeToken.user;
  }
}
