import { Component, OnInit } from '@angular/core';
import { ViewportService } from 'src/app/core/services/viewport.service';

@Component({
  selector: 'sgn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    public readonly vp: ViewportService,
  ) { }

  ngOnInit() {
  }

}
