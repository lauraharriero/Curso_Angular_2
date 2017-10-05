import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {URL, aContinentes} from './modelo';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  sContinente: string;
  aContinentes: Array<string>;
  aPaises: Array<string>;

  constructor(private http: Http) {
    // this.http = http;
   }

  ngOnInit() {
    this.aContinentes = aContinentes;
    this.aPaises = [];
  }

  buscarPaises () {
    this.aPaises = [];
    this.http.get(URL + this.sContinente)
    .subscribe(
      response => {
        const data = response.json();
        for (let i = 0; i < data.length; i++) {
          this.aPaises.push(data[i].name);
        }
        console.log(data); },
      error => { console.log(error); }
    );
  }
}
