import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { OperdorElvisComponent } from './operdor-elvis/operdor-elvis.component';
import { ExemploContentComponent } from './exemplo-content/exemplo-content.component';
import { FundoAmarelaDirective } from './shared/fundo-amarela.directive';
import { DiretivaCustomizdasComponent } from './diretiva-customizdas/diretiva-customizdas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    NgswitchComponent,
    NgforComponent,
    DiretivaNgClassComponent,
    DiretivaNgStyleComponent,
    OperdorElvisComponent,
    ExemploContentComponent,
    FundoAmarelaDirective,
    DiretivaCustomizdasComponent,
    HighlightMouseDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
