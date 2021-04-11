import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  public loading: HTMLIonLoadingElement;

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
  }

  public mostrarLoad() {
    this.loadFunc('Cargandor...');
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  public async loadFunc(msg) {
    this.loading = await this.loadingController.create({
      message: msg
    });
    await this.loading.present();
  }

  /* async mostrarLoad() {
     this.loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click en el fondo para dismiss...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  } */

}
