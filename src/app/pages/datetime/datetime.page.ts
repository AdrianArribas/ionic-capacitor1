import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  public fecha: Date = new Date();
  public customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  public customPicker = {
    buttons: [
      {
        text: 'Holi',
        handler: (event) => {
          console.log(event)
        }
      },
      {
        text: 'Mundo',
        handler: (event) => {
          console.log(event)
        }
      },

    ]
  }

  constructor() { }

  ngOnInit() {
  }

  public cambioFecha(date) {
    console.log('date: ', date.detail.value);
  }

}
