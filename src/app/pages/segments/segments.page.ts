import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Heroe } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {

  public heroes: Heroe[] = [];
  public herosesObs: Observable<Heroe[]>
  public texto: string = '';
  public data: boolean = false;

  constructor(private service: DataService) { }

  ngOnInit() {

    // FORMA 1 DE HACER LLAMADA
    this.service.getHeroes().subscribe((data: Heroe[]) => {
      this.data = false;
      setTimeout(() => {
        this.heroes = data;
        this.data = true;
      }, 1500);

    });

    // FORMA 2 A TRAVÉS DE OBSERVABLE: MAS FACIL PARA TRABAJAR EN HTML
    this.herosesObs = this.service.getHeroes();

  }

  public segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.texto = ev.detail.value;
  }

}
