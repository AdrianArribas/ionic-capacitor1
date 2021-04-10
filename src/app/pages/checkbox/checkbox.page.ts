import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public items = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'danger',
      selected: false
    },
    {
      name: 'success',
      selected: false
    },
  ]

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  public onClick(item) {
    console.log('seleccionado: ', item);
  }

}
