import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  public nombre: string = '';
  public usuario = {
    email: '',
    password: ''
  }
  public pattern = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";

  public form: NgForm;

  constructor() { }

  ngOnInit() {

  }

  public cambio(event) {
    console.log(event.detail.value);
  }

  public onSubmit(event: NgForm) {
    this.form = event;
    console.log('info del formulario', event);
    console.log('info de los campos', this.usuario);
  }

}
