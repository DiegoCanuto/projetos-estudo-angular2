import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizdas',
  templateUrl: './diretiva-customizdas.component.html',
  styleUrls: ['./diretiva-customizdas.component.scss']
})
export class DiretivaCustomizdasComponent implements OnInit {

  mostrarCursos: boolean = false;

  
  onMostrarCursos(){

    return this.mostrarCursos = !this.mostrarCursos;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
