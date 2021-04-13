import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public nombreInicio: string;

  public menuItems: Observable<MenuItem[]>;

  constructor(private menuCtrl: MenuController, private dataservice: DataService) {
    this.nombreInicio = 'Ionic Adri App'
  }

  ngOnInit() {
    this.menuItems = this.dataservice.getMenuOptions();
  }


  public mostrarMenu() {
    this.menuCtrl.open('first'); //menu id
  }

}
