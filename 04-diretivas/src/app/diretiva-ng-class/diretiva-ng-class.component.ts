import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss']
})
export class DiretivaNgClassComponent implements OnInit {

  meuFavorito: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    return this.meuFavorito =!this.meuFavorito;
  }

}
