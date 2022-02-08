import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarela]'
})
export class FundoAmarelaDirective {

  

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) {
    console.log(this._elementRef);

    //não é recomendado por que pode sofrer ataques na aplicação
   // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow');
    
   }

}
