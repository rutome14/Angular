import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      direccion: new FormControl(),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.pattern(/^[A-Za-z0-9!.]{3,14}$/)
      ]),
      repite_password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  // Un validador custom es una FUNCIÓN 
  // Esta función recibe por parámetro el CONTROL que estamos validando
  // Para indicar que el campo está correcto devolvemos NULL
  // Para indicar que el campo está incorrecto devolvemos CUALQUIER COSA DIFERENTE DE NULL
  edadValidator(pControl: FormControl) {
    const value = pControl.value;

    if (!value) {
      return null;
    }

    if (value >= 18 && value <= 65) {
      return null;
    } else {
      return { edadvalidator: true };
    }
  }

  dniValidator(pControl: FormControl) {
    const value = pControl.value;
    const grupoLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      const numero = value.substring(0, value.length - 1);
      const letra = value.substring(value.length - 1, value.length);

      const resto = numero % 23;

      const letraSeleccionada = grupoLetras.substring(resto, resto + 1);

      if (letraSeleccionada != letra.toUpperCase()) {
        return { dnivalidator: true };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: true };
    }

  }

  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched
  }

}