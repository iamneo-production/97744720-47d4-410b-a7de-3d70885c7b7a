import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedMenuAndItemService {
  item:any=null;
  obj:any=Object;
  itemdetails:any=null;
  status: Array<number> = [0,0,0]; 
  getStatus()
  {
    return this.status;
  }
  setStatus(status:any)
  {
    this.status=status;
  }
  itmcat=[
    {id:1,Name:"Veg"},
    {id:2,Name:"Non Veg"}
  ]
  getItmcat()
  {
    return this.itmcat;
  }
  getObj()
  {
    return this.obj;
  }
  setObj(data:any)
  {
    this.obj=data;
  }

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
