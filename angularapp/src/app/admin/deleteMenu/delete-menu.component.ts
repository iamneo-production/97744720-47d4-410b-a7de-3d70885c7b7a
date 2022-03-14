import { Component, OnInit } from '@angular/core';
import { AddmenuService } from 'src/app/common.service';
import { SharedMenuAndItemService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete-menu',
  templateUrl: './delete-menu.component.html',
  styleUrls: ['./delete-menu.component.css']
})
export class DeleteMenuComponent implements OnInit {

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
  }

}
