import { Injectable } from '@angular/core';
import { Addon } from './addon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  constructor(private http:HttpClient) { 
  
  }
  addAddon(addon:Addon):Observable<Object>{
    return this.http.post("https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin/saveaddon",addon);
  }
  deleteAddon(id:number):Observable<object>{
   return this.http.delete("https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin/deleteaddon/" +id);
  }
  getAddon():Observable<Addon[]>{
    return this.http.get<Addon[]>("https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin/viewaddon");
  }
  getAddonById(id:number):Observable<Addon>{
  return  this.http.get<Addon>("https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin/viewaddon/"+id);
  }
  editAddon(id:number,addon:Addon):Observable<Object>{
    return this.http.put("https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin/editaddon/"+id,addon);
  }
}
