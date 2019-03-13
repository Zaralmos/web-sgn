import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportService } from 'src/app/core/services/viewport.service';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'sgn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public selectedItem: string | null = null;

  constructor(
    public readonly vp: ViewportService,
    public readonly scroll: ScrollService,
    public readonly menu: MenuService
  ) { }

  @HostListener('mouseleave')
  onleave() {
    this.selectedItem = null;
    console.log('leaved');
  }

  public onEnter(itemName: string) {
    console.log('entered');
    this.selectedItem = itemName;
  }

  ngOnInit() {
  }

}
