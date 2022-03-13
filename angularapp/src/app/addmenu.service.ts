import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddmenuService {
  [x: string]: any;
  addmenuservice: any;

  constructor(private http: HttpClient) { }
  api = "https://8080-dfcaaeacadedcedbeccabcebdcdedfbabbaad.examlyiopb.examly.io/admin";
  public addItem(itemdata: any) {
    return this.http.post(this.api + '/addMenu', itemdata);
  }
  public getitembyid(foodMenuID:any)
  {
    return this.http.get(this.api+'/getitembyid?foodMenuID='+foodMenuID);
  }
  public getItems() {
    return this.http.get(this.api + '/getMenu');
  }
  public deleteItem(foodMenuID: any) {
    return this.http.delete(this.api + '/deleteMenu/' + foodMenuID);
  }
  public updateItem(itemdata:any)
  {
    return this.http.put(this.api+'/editMenu',itemdata);
  }
}
