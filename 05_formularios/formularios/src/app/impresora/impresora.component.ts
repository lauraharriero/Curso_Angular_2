import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-impresora',
    templateUrl: './impresora.component.html',
    styleUrls: ['./impresora.component.css']
})

export class ImpresoraComponent implements OnInit {
    aImpresoras: Array<string>;
    impresoraSeleccionada: string;

    print: boolean; 	// true si se selecciona imprime
    isClaro: boolean;  // true si se selecciona claro
    mostrarFinal: boolean;

    constructor() { }

    ngOnInit() {
        this.aImpresoras = ['HP Pagewide Pro 477dw',
        'Epson Stylus SX235W',
        'Lexmark CS310/410',
        'Brother HL-3140CW'];

        this.print = false;
        this.isClaro = false;
        this.mostrarFinal = false;
     }
     avisarPrint = () => {
        console.log('Modificada la opción de imprimir con valor :' + this.print);
      }

}
