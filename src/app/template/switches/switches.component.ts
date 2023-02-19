import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;

  @ViewChild('miFormularioSwitches') miFormularioSwitches!: NgForm;
  get errores(): any {
    return this.miFormularioSwitches?.controls['terminosYcondiciones']?.errors
  }

}
