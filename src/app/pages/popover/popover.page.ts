import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  public async onClick(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: true, //establece si se puede o no cerrar el popover clickando fuera de éste.
    });
    await popover.present();

    const { role } = await popover.onWillDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
