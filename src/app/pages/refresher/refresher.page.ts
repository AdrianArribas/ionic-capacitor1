import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  public items: any[] = Array();
  public numero: number = 2;
  public fade: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public doRefresh(event) {
    this.fade = false;
    console.log(event);
    setTimeout(() => {
      this.items = Array(this.numero);

      this.numero += Math.floor(Math.random() * (1 - 5)) + 5;;
      event.detail.complete();
      this.fade = true;
    }, 2000);

  }

}
