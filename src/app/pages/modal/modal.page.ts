import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  public async onClick() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {  // de esta manera podemos mandar datos a la modal
        nombre: 'Adri Modal',
        estado: 'texto desde componente padre',
        modalnomb: 'Modal'
      },
      cssClass: 'my-modal-class',
    });

    await modal.present();

    // const resp = await modal.onWillDismiss(); // se dispara al tiempo que se cierra la modal
    const { data } = await modal.onDidDismiss(); //se dispara una vez cerrada la modal

    console.log('datos desde modal: ', data);
  }

}
