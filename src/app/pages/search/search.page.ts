import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public albums: any[];
  public textoBuscar: string = '';

  constructor(private http: HttpClient, private serv: DataService) { }

  ngOnInit() {
    this.serv.getAlbums().subscribe((res: any[]) => {
      this.albums = res;
      console.log('res', this.albums);
    });
  }

  public change(ev) {
    this.textoBuscar = ev.detail.value;
    console.log(ev);
  }
}
