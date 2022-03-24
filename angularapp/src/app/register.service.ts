import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { 
   
  }
   public signUp(user1:User):Observable<any>{
    return this.http.post<any>("https://8080-bceddbffefcdbeccabcebdcdedfbabbaad.examlyiopb.examly.io/register",user1);

  }
  public login(user:User):Observable<any>{
    return this.http.post<any>("https://8080-bceddbffefcdbeccabcebdcdedfbabbaad.examlyiopb.examly.io/login",user);
  }
}
