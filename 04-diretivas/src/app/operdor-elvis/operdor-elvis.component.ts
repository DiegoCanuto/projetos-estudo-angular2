import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operdor-elvis',
  templateUrl: './operdor-elvis.component.html',
  styleUrls: ['./operdor-elvis.component.scss']
})
export class OperdorElvisComponent implements OnInit {

  tarefa: any = {
    descricao: 'Descrição tarefa',
    responsavel:{
      usuario:null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
