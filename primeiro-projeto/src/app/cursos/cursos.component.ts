import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  nomePortal: any;

  cursos : string[] = ['Java','JS','Angular'];

  constructor(){
    this.nomePortal = 'http://jozinho.training.primao';
  }

  ngOnInit(){
      
  }

}
