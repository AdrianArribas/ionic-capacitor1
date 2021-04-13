import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() public nombre: string;
  @Input() public estado: string;
  @Input() public modalnomb: string;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  public onClick() {
    this.modalCtrl.dismiss();
  }

  public onClickdos() {
    this.modalCtrl.dismiss({
      nombre: 'modal cerrada',
      dato: 'dato desde modal'
    });
  }
}
