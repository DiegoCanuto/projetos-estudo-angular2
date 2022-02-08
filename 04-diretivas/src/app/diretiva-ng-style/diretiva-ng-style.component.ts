import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent implements OnInit {

  tamanhoFonte: number = 10;
  ativo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

  mudarFonte(){
    this.tamanhoFonte ++;
  }

}
