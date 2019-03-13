import { Component, OnInit } from '@angular/core';
import { ViewportService } from 'src/app/core/services/viewport.service';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'sgn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public readonly vp: ViewportService,
    public readonly scroll: ScrollService,
    public readonly menu: MenuService
  ) { }

  ngOnInit() {
  }

}
