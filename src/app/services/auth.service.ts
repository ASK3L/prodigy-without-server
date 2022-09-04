import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl ;
  
   //<--------------- service for logging in --------------- >
   login(loginData:User) {
    return this.http.post<User>(this.apiUrl + '/login', loginData);
  }

}
