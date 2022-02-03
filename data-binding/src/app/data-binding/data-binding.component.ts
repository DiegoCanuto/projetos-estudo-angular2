import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://teste.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200'

  getValor(){
    return 5;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
