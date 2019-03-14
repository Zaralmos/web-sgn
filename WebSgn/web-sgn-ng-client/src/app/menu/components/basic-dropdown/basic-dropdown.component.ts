import { Component, OnInit, Input } from '@angular/core';
import { SubmenuItem } from 'src/app/shared/models/menu/submenu-item';

@Component({
  selector: 'sgn-basic-dropdown',
  templateUrl: './basic-dropdown.component.html',
  styleUrls: ['./basic-dropdown.component.scss']
})
export class BasicDropdownComponent implements OnInit {

  @Input()
  public items!: SubmenuItem[];

  public selectedItem!: SubmenuItem;

  constructor() { }

  ngOnInit() {
    if (!this.items || !this.items.length) {
      console.error('empty shit');
    }
    this.selectedItem = this.items[0];
  }

  public onEnter(item: SubmenuItem) {
    this.selectedItem = item;
  }
}
