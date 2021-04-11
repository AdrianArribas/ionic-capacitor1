import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public love: boolean = false;
  public sharing: boolean = false;
  public usuarios: Observable<any>;
  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    // ############## LLamada con Observable #############################
    /* this.dataService.getUsuarios().subscribe((res: any) => {
      console.log(res);
      
    }); */

    // ############## LLamada alternativa ########################
    this.usuarios = this.dataService.getUsuarios();
  }

  public favorite(user) {
    this.love = !this.love;
    console.log('Adding fav: ', user);
    this.ionList.closeSlidingItems();
  }

  public share(user) {
    this.sharing = !this.sharing;
    console.log('Sharing: ', user);
    this.ionList.closeSlidingItems();
  }

  public delItem(user) {
    console.log('Deleted: ', user);
    this.ionList.closeSlidingItems();

  }
}
