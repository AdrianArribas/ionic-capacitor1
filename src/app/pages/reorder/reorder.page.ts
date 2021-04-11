import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  public personajes: string[] = ['Batman', 'Superman', 'Flash', 'Wonder-Woman', 'Cyborg', 'Arrow'];
  public toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public doReorder(event) {
    console.log(event);
    event.detail.complete();
    console.log(this.personajes);

    // ########## MOVIENDO LAS POSICIONES EN EL ARRAY #######################
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    console.log(this.personajes);

  }

  public resetOrder() {
    this.toggle = !this.toggle;
  }

}
