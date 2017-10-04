import { Component } from '@angular/core';

// Uso de interfaces para definir las propiedades de una clase
// que se utiliza como modelo de datos
// En este caso no se "implementa" el interfaz
// Podría llevarse a un fichhero inedpendiente, exportarse
// y luego importarse en este

interface Provincia {
  idProvincia: number;
  nombre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  aImpresoras: Array<string> = ['HP Pagewide Pro 477dw',
                              'Epson Stylus SX235W',
                              'Lexmark CS310/410',
                              'Brother HL-3140CW']

  aProvincias: Array<Provincia> = [
    {idProvincia: 2, nombre: 'Castellón'},
    {idProvincia: 3, nombre: 'Alicante'},
    {idProvincia: 1, nombre: 'Valencia' },
    {idProvincia: 7, nombre: 'Teruel'},
    {idProvincia: 5, nombre: 'Tarragona'}
  ];

  impresoraSeleccionada: string;
  provinciaSeleccionada: Provincia = {idProvincia: 0, nombre: ''};

  print: boolean = false;	// true si se selecciona imprime
  isClaro: boolean = false; // true si se selecciona claro
  mostrarFinal: boolean = false;

  avisarPrint = () => {
    console.log('Modificada la opción de imprimir con valor :' + this.print);
  }

  avisarProvincia = () => {
    this.mostrarFinal = true;
    console.log('Provincia Seleccionada');
    console.dir(this.provinciaSeleccionada);
  }

}
