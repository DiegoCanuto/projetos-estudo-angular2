import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://teste.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';


  valorAtual: string = '';
  valorSalvo ='';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Curso de Angular';

  nome: string = 'abc';

  pessoa: any = {

    nome: 'teste',
    idade: 2
  }



  getValor(){
    return 5;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    
  }

  salvarValor(valor : string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
