import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }
  private baseURL = "https://8080-baefceccffdfbdbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin/theme";
  
  createTheme(theme:Theme):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,theme);
  }
  deleteTheme(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getThemeList():Observable<Theme[]>{
    return this.httpClient.get<Theme[]>(`${this.baseURL}`);
  }
  getThemeById(id: number): Observable<Theme>{
    return this.httpClient.get<Theme>(`${this.baseURL}/${id}`);
  }
  updateTheme(id: number, theme: Theme): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, theme);
  }
}