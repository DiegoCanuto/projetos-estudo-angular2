import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  livro : any = {
    titulo: 'As Sombras de Arkron',
    rating: 4.4354,
    numeroPaginas: 213,
    preco: 35.50,
    dataLancamento: new Date(2017,7,18),
    url: 'https://www.amazon.com.br/As-Sombras-Arkron-Diego-Canuto-ebook/dp/B07M9TD9WK'
  };

  livros : string[] = ['Java', 'Angular'];

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincorno'), 2000);

   });

   valorAsync2 = Observable.interval(2000).map(valor => 'valor assíncrono 2');

  constructor() { }

  ngOnInit(): void {
  }

}
