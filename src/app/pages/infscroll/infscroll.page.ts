import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infscroll',
  templateUrl: './infscroll.page.html',
  styleUrls: ['./infscroll.page.scss'],
})
export class InfscrollPage implements OnInit {

  public data: any = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  public loadData(event) {

    console.log(event);

    setTimeout(() => {
      console.log(this.data.length)

      if (this.data.length > 50) {
        // event.target.complete();
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
      } else {
        const nuevoArr = Array(20);
        this.data.push(...nuevoArr);
        this.infiniteScroll.complete();
      }




    }, 1500);
  }

}
