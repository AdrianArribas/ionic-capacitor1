import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  public items = Array(10);
  constructor() { }

  ngOnInit() { }

  public onClick(valor: number) {
    console.log(valor);
  }

}
