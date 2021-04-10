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
  ];

  constructor() {
    this.nombreInicio = 'Ionic Adri App'
  }

  ngOnInit() {
  }

}
