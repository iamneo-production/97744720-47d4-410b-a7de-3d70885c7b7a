import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddmenuService {
  [x: string]: any;
  addmenuservice: any;

  constructor(private http: HttpClient) { }
  api = "https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io";
  public addItem(itemdata: any) {
    return this.http.post(this.api + '/additem', itemdata);
  }
  public getItems() {
    return this.http.get(this.api + '/getitems');
  }
  public deleteItem(sno: any) {
    return this.http.delete(this.api + '/deleteitem?sno=' + sno);
  }
  public updateItem(itemdata:any)
  {
    return this.http.put(this.api+'/updateitem',itemdata);
  }
}
