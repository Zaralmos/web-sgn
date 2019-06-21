import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
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
export class MenuComponent implements AfterViewInit {

  public menuItems: MenuItem[] = [
    { name: 'Абитуриенту' },
    { name: 'Новости' },
    { name: 'Структура' },
    { icon: 'search' },
  ]

  public enrolleeSubmenuItems: SubmenuItem[] = [
    {
      name: 'Прикладная информатика',
      photoUrl: 'https://www.xjtlu.edu.cn/en/assets/image-cache/images/programmes/msc-applied-informatics.974a2c6e.jpg',
      // tslint:disable-next-line: max-line-length
      description: 'Это первая в России учебная программа по подготовке бакалавров в области социологии техники, инженерной деятельности и инновационных процессов. В ее основе рассмотрение науки, техники и общества как.',
      link: '/enrollee/sgn3',
      cta: 'Узнать о направлении',
    },
    {
      name: 'Социология инженерной деятельности',
      photoUrl: 'https://sociology.adelphi.edu/files/2015/08/hero-sociology-people.png?t=1438786797-467104-b',
      description: 'Как фундаментальная наука, социология объясняет социальные явления, собирает и обобщает информацию о них. Как прикладная наука, социология позволяет прогнозировать социальные явления и управлять ими.',
      link: '/enrollee/sgn2',
      cta: 'Узнать о направлении',
    },
    {
      name: 'Календарь абитуриента',
      photoUrl: 'https://bloximages.newyork1.vip.townnews.com/dentonrc.com/content/tncms/assets/v3/editorial/8/bf/8bff130a-4942-11e8-a14e-e309ea033e2b/5ae1b3f5acabe.image.jpg?resize=400%2C267',
      description: 'Социоло́гия (от лат. societas — общество и др.-греч. λόγος — слово) — наука об обществе, составляющих его системах и закономерностях его функционирования и развития, социальных институтах.',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Часто задаваемые вопросы',
      photoUrl: 'http://www.homenet.it/wp-content/uploads/2018/09/faq-tbs-msc.png',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/faq',
      cta: 'Узнать ответы',
    }
  ]

  public departmentsSubmenuItems: SubmenuItem[] = [
    {
      name: 'СГН1 Кафедра истории',
      photoUrl: 'https://www.hull.ac.uk/editor-assets/images/sociology/sociology.x8922048a.jpg',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },

    {
      name: 'СГН2 Кафедра социологии и культорологии',
      photoUrl: 'https://www.abc.net.au/news/image/9670912-3x2-700x467.jpg',
      description: 'Умереть не встать',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'СГН3 Кафедра информационной аналитики и политических технологий',
      photoUrl: 'https://www.gold.ac.uk/media/images-by-section/study/postgraduate/fees-and-funding/Street-art-in-London_1913.jpg',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'СГН4 Кафедра философии',
      photoUrl: 'https://www.gold.ac.uk/media/images-by-section/study/postgraduate/fees-and-funding/Street-art-in-London_1913.jpg',
      description: 'lorem ipsum dolorsit amet',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Деканат',
      photoUrl: 'https://www.hull.ac.uk/editor-assets/images/sociology/sociology.x8922048a.jpg',
      // tslint:disable-next-line: max-line-length
      description: 'Это первая в России учебная программа по подготовке бакалавров в области социологии техники, инженерной деятельности и инновационных процессов. В ее основе рассмотрение науки, техники и общества как взаимосвязанных элементов единой системы на базе современных социальных исследований с применением количественных и качественных методов. Базовая кафедра «Социология и культурология».',
      link: '/enrollee/calendar',
      cta: 'Смотреть календарь',
    },
    {
      name: 'Приёмная комиссия',
      photoUrl: 'https://www.gold.ac.uk/media/images-by-section/study/postgraduate/fees-and-funding/Street-art-in-London_1913.jpg',
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
    public readonly menu: MenuService,
    public readonly ref: ElementRef<HTMLElement>
  ) { }

  @HostListener('mouseleave')
  onleave() {
    this.closeDropDown();
  }

  public onEnter(itemName: string) {
    this.selectedItem = itemName;
  }

  public closeDropDown() {
    this.selectedItem = null
    console.log('leaved');
  }

  ngAfterViewInit() {
    const dropDown = <HTMLMenuElement>this.ref.nativeElement.querySelector('menu.drop-down');
    console.warn(this.ref, dropDown);

    if (dropDown) {
      dropDown.addEventListener('mouseleave', () => this.closeDropDown());
    }
  }


}
