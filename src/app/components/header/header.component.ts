import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() public nombre: string;

  constructor() { }

  ngOnInit() {
    this.nombre === undefined ? this.nombre = 'sin titulo' : this.nombre;
  }

}
