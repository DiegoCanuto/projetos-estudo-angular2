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
    FundoAmarelaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
