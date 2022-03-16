import { Component, OnInit } from '@angular/core';
import { AddmenuService } from 'src/app/common.service';
import { SharedMenuAndItemService } from 'src/app/shared.service';

@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.css']
})
export class DeletemenuComponent implements OnInit {
  itemname:any=null;
  constructor(private share: SharedMenuAndItemService, private addmenuservice: AddmenuService) { }
  deleteItem() {
    this.addmenuservice.deleteItem(this.share.getObj().foodMenuID).subscribe(
      (resp) => {
        alert("Your item delted Sucessfully");
        window.location.reload();
      },
     (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    document.getElementById("openModalButton").click();
    this.itemname=this.share.getObj().foodMenuItems;
  }


}
