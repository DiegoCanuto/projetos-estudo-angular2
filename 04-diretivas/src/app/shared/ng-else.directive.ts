import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  /*@Input() set ngElsecondition: boolean){
    if (!condition) {
      this._viewContainerRef.createEmbeddeView(this._viewContainerRef);
    }else{
      this._viewContainerRef.clear();
    }
  }*/
  

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
