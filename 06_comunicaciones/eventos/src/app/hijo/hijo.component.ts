import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()
  usuario: string;

  @Output()
  borrar: EventEmitter<any>;

  constructor() {
    this.borrar = new EventEmitter() ;
  }

  ngOnInit() {


  }
  btnBorrar() {
    this.borrar.emit();
  }

}
