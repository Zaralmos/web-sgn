import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'sgn-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
}

) export class HomePageComponent implements OnInit {
  public edit = false;

  constructor() { }

  ngOnInit() { }


}