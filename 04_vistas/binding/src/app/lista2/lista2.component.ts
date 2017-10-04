import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css']
})
export class Lista2Component implements OnInit {
  aPensamientos: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
