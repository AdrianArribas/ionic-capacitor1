import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe, MenuItem } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.http.get<MenuItem[]>("/assets/data/menu-opts.json");
  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<Heroe[]>("/assets/data/superheroes.json");
  }
}
