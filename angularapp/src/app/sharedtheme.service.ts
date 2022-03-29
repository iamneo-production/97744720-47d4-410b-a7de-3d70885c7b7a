import { Injectable } from '@angular/core';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class SharedthemeService {
  item:any=null;
  obj:any=Object;
  status: Array<number> = [0,0,0]; 
  itemdetails:any=null;
  themes!:Theme[];
  checkstatus(additemform:any,themes)
  {
    console.log(themes);
    for (let i = 1; i <themes.length; i++) 
       {
         if(additemform.themeImageURL==themes[i].themeImageURL && additemform.themeReturnGift==themes[i].themeReturnGift && additemform.themeName==themes[i].themeName && additemform.themeVideographer==themes[i].themeVideographer && additemform.themePhotographer==themes[i].themePhotographer && additemform.themeCost==themes[i].themeCost && additemform.themeDescription==themes[i].themeDescription)
          return true
    }
    return false
  }
  chechstatus1(x:any)
  {
    console.log(x[1]);
    console.log(x.length);
  }
  getStatus()
  {
    return this.status;
  }
  setStatus(status:any)
  {
    this.status=status;
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
    console.log(this.item);
  }
  getItem()
  {
    console.log("method got");
    console.log(this.item);
    return this.item;
    
  }
  constructor() { }
}