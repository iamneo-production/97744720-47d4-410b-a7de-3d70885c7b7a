import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuAndItemService {
  item:any=null;
  setItem(data: any)
  {
    this.item=data;
  }
  getItem()
  {
    return this.item;
  }
  constructor() { }
}
