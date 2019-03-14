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
      // tslint:disable-next-line: max-line-length
      description: 'Это первая в России учебная программа по подготовке бакалавров в области социологии техники, инженерной деятельности и инновационных процессов. В ее основе рассмотрение науки, техники и общества как взаимосвязанных элементов единой системы на базе современных социальных исследований с применением количественных и качественных методов. Базовая кафедра «Социология и культурология».',
      link: '/enrollee/calendar',
      cta: 'Узнать о направлении',
    },
    {
      name: 'Социология инженерной деятельности',
      photoUrl: '',
      description: 'Умереть не встать',
      link: '/enrollee/calendar',
      cta: 'Узнать о направлении',
    },
    {
      name: 'Часто задаваемые вопросы',
      photoUrl: '',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Узнать ответы',
    }
  ]

  public departmentsSubmenuItems: SubmenuItem[] = [
    {
      name: 'Кафедра истории',
      photoUrl: 'https://www.hull.ac.uk/editor-assets/images/sociology/sociology.x8922048a.jpg',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },

    {
      name: 'Кафедра социологии и культорологии',
      photoUrl: '',
      description: 'Умереть не встать',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Кафедра информационной аналитики',
      photoUrl: 'https://www.gold.ac.uk/media/images-by-section/study/postgraduate/fees-and-funding/Street-art-in-London_1913.jpg',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Деканат',
      photoUrl: '',
      // tslint:disable-next-line: max-line-length
      description: 'Это первая в России учебная программа по подготовке бакалавров в области социологии техники, инженерной деятельности и инновационных процессов. В ее основе рассмотрение науки, техники и общества как взаимосвязанных элементов единой системы на базе современных социальных исследований с применением количественных и качественных методов. Базовая кафедра «Социология и культурология».',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Приёмная комиссия',
      photoUrl: '',
      // tslint:disable-next-line: max-line-length
      description: 'Это первая в России учебная программа по подготовке бакалавров в области социологии техники, инженерной деятельности и инновационных процессов. В ее основе рассмотрение науки, техники и общества как взаимосвязанных элементов единой системы на базе современных социальных исследований с применением количественных и качественных методов. Базовая кафедра «Социология и культурология».',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
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
