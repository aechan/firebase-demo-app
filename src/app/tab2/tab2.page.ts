import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  itemUrl: string;
  items: { url: string, id: string }[] = [];
  private addItem() {
    // add the item then refresh
    this.getItems();
  }

  private getItems() {

  }
}
