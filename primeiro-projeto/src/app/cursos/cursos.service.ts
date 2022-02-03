import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  //http objeto para conectar servico
  constructor() { }

  getCursos(){

    return ['Java','JS','Angular'];

  }
}
