import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIResponse } from '../interfaces/api-response';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL: string = 'http://localhost:8080/api/v1/users';

  isLoggedIn: boolean = false;
  authToken?: string;

  constructor(private http: HttpClient, private router: Router) {
    this.autoLogin;
  }

  login(data: any): Observable<APIResponse<User & string>> {
    return this.http.post<APIResponse>(this.API_URL + '/login', data).pipe(
      tap((res) => {
        if (res.status === 'success') this.isLoggedIn = true;
        this.authToken = res.data!['token'];
        this.saveToken(res.data![this.authToken]);
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.authToken = undefined;
    localStorage.removeItem('authToken');
    this.router.navigate(['/home']);
  }

  private autoLogin(): void {
    let authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.isLoggedIn = true;
      this.authToken = authToken;
    }
  }

  private saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
}
