import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportService } from 'src/app/core/services/viewport.service';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from 'src/app/shared/models/menu/menu-item';
import { SubmenuItem } from 'src/app/shared/models/menu/submenu-item';

@Component({
  selector: 'sgn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { name: 'Абитуриенту' },
    { name: 'Новости' },
    { name: 'Структура' },
    { icon: 'search' },
  ]

  public enrolleeSubmenuItems: SubmenuItem[] = [
    {
      name: 'Календарь абитуриента',
      photoUrl: '',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Прикладная информатика',
      photoUrl: '',
      description: 'Инновационное направление подготовки',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Социология инженерной деятельности',
      photoUrl: '',
      description: 'Умереть не встать',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Часто задаваемые вопросы',
      photoUrl: '',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    }

  ]

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
