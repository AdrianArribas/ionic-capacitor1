import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular/providers/menu-controller';
import { Observable } from 'rxjs/internal/Observable';
import { MenuItem } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public menuItems: Observable<MenuItem[]>;

  constructor(private dataservice: DataService) {

  }

  ngOnInit() {
    this.menuItems = this.dataservice.getMenuOptions();
  }


}
