import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle=';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public claveBusqueda: string;
  public aResultados: Array<any>;

  constructor(private http: Http) { }

  ngOnInit() {
    this.claveBusqueda = '';
    this.aResultados = [];
  }

  btnBuscar() {
    this.http.get(URL + this.claveBusqueda)
    .subscribe(response => console.log(response));
    // this.aResultados = [];
  }

}
