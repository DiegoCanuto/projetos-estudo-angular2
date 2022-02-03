import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

 

  nomePortal: any;

  cursos : string[];


  constructor(private cursosService:CursosService){
    this.nomePortal = 'http://jozinho.training.primao';
    this.cursos = this.cursosService.getCursos();
  }
  ngOnInit(): void {
   }

}
