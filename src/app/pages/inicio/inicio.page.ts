import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public nombreInicio: string;

  public menuItems: MenuItem[] = [
    {
      icon: 'game-controller-outline',
      name: 'action-sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'layers-outline',
      name: 'Cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkboxes',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Date-Time',
      redirectTo: '/datetime'
    },
    {
      icon: 'chevron-down-circle-outline',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'film-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infscroll'
    },
    {
      icon: 'clipboard-outline',
      name: 'Ion-Input & Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'Lists - services - sliding',
      redirectTo: '/list'
    },
    {
      icon: 'list-circle-outline',
      name: 'ion-reorder',
      redirectTo: '/reorder'
    },
    {
      icon: 'reload-circle-outline',
      name: 'Loading',
      redirectTo: '/loading'
    },
  ];

  constructor() {
    this.nombreInicio = 'Ionic Adri App'
  }

  ngOnInit() {
  }

}
