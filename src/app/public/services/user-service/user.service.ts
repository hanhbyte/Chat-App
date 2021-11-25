import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, Observable, tap, throwError} from "rxjs";
import {UserInterface} from "../../../model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  findByUsername(username: string): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('/api/user/find-by-username?username=${username}');
  }

  create(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>('/api/user/', user).pipe(
      tap((createUser: UserInterface) => this.snackbar.open('Tạo mới ${createUser.username} thành công.', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
      catchError(e => {
        this.snackbar.open('Không thể tạo mới người dùng : ${e.error.username}', 'Close', {
          duration: 5000, horizontalPosition: 'right', verticalPosition: 'top'
        })
        return throwError(e);
      })
    )
  }
}
